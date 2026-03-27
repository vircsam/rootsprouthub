import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import SkillNode from '../components/SkillNode';
import LearningNavbar from '../components/LearningNavbar';
import { Node } from '../types';
import { Trophy, Target, Star } from 'lucide-react';
import { getDashboard, getRoadmaps, type RoadmapTopic } from '../api/learning';

const INITIAL_NODES: Node[] = [
  { id: '1', title: 'Process Basics', topic: 'OS', status: 'completed', progress: 100, position: { x: 0, y: 0 } },
  { id: '2', title: 'Memory Layout', topic: 'OS', status: 'available', progress: 45, position: { x: 80, y: 120 } },
  { id: '3', title: 'File Systems', topic: 'OS', status: 'locked', progress: 0, position: { x: -80, y: 240 } },
  { id: '4', title: 'SQL Fundamentals', topic: 'DB', status: 'available', progress: 0, position: { x: 120, y: 360 } },
  { id: '5', title: 'Indexing', topic: 'DB', status: 'locked', progress: 0, position: { x: 0, y: 480 } },
  { id: '6', title: 'TCP/IP Stack', topic: 'Networking', status: 'locked', progress: 0, position: { x: -120, y: 600 } },
];

const DEFAULT_GOALS = [
  { label: 'Complete 2 lessons', progress: 50 },
  { label: 'Earn 100 XP', progress: 80 },
  { label: 'Fix 1 DB query', progress: 0 },
];

export default function Dashboard() {
  const [dashboardNodes, setDashboardNodes] = useState<Node[]>(INITIAL_NODES);
  const [stats, setStats] = useState({ totalXP: 2450, level: 14, xpToNext: 350 });
  const [goals, setGoals] = useState(DEFAULT_GOALS);
  const [achievements, setAchievements] = useState<number[]>([1, 2, 3, 4, 5]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [roadmaps, setRoadmaps] = useState<RoadmapTopic[]>([]);
  const [currentTopics, setCurrentTopics] = useState<string[]>([]);
  const [activeTopic, setActiveTopic] = useState<string>('');
  const [streakMonth, setStreakMonth] = useState<{ year: number; month: number; days: { date: string; completed: boolean }[] } | null>(null);
  const navigate = useNavigate();

  const handleNodeClick = (node: Node) => {
    navigate(`/lesson/${node.id}`);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    let mounted = true;
    getDashboard()
      .then((data) => {
        if (!mounted) return;
        setDashboardNodes(
          data.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            topic: node.topic as Node['topic'],
            status: node.status,
            progress: node.progress,
            position: node.position,
          }))
        );
        setStats(data.stats);
        setUser(data.user);
        setGoals(data.goals.length ? data.goals : DEFAULT_GOALS);
        setAchievements(data.achievements.length ? data.achievements.map((a) => a.id) : [1, 2, 3, 4, 5]);
        setStreakMonth(data.streak ?? null);
      })
      .catch((err) => {
        if (err instanceof Error && err.message === 'unauthorized') {
          navigate('/login');
          return;
        }
        setDashboardNodes(INITIAL_NODES);
        setUser(null);
        setGoals(DEFAULT_GOALS);
        setAchievements([1, 2, 3, 4, 5]);
        setStreakMonth(null);
      });

    getRoadmaps()
      .then((data) => {
        if (!mounted) return;
        setRoadmaps(data.topics);
        setCurrentTopics(data.currentTopics);
        setActiveTopic(data.currentTopics[0] || data.topics[0]?.topic || '');
      })
      .catch(() => {
        setRoadmaps([]);
        setCurrentTopics([]);
      });
    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const orderedNodes = useMemo(() => {
    const sorted = [...dashboardNodes].sort((a, b) => Number(a.id) - Number(b.id));
    const filtered = activeTopic ? sorted.filter((node) => node.topic === activeTopic) : sorted;
    return filtered;
  }, [dashboardNodes, activeTopic]);

  const sectionLessonMap = useMemo(
    () => ({
      OS: {
        Memory: ['Memory Layout'],
        CPU: ['Process Basics'],
        'File System': ['File Systems'],
      },
      DB: {
        SQL: ['SQL Fundamentals'],
        Indexing: ['Indexing'],
      },
      Networking: {
        Core: ['TCP/IP Stack'],
      },
      'Distributed Systems': {},
    }),
    []
  );

  const roadmapSections = useMemo(() => {
    if (!activeTopic) return [];
    const map = sectionLessonMap[activeTopic as keyof typeof sectionLessonMap];
    if (!map) return [];
    return Object.entries(map).map(([title, lessons]) => {
      const nodes = orderedNodes.filter((node) => lessons.includes(node.title));
      const completed = nodes.length > 0 && nodes.every((node) => node.status === 'completed');
      return { title, nodes, completed, topic: activeTopic };
    });
  }, [activeTopic, orderedNodes, sectionLessonMap]);

  const layoutSections = useMemo(() => {
    if (roadmapSections.length === 0) {
      return [
        {
          title: activeTopic || 'Roadmap',
          completed: false,
          nodes: orderedNodes.map((node, index) => ({
            ...node,
            position: {
              x: isMobile ? 0 : index % 2 === 0 ? -80 : 80,
              y: index * 140,
            },
          })),
        },
      ];
    }
    return roadmapSections.map((section) => {
      const baseNodes = section.nodes.map((node) => ({ ...node }));
      const placeholders: Node[] = [
        {
          id: `${section.title}-placeholder-1`,
          title: 'Coming Soon',
          topic: section.topic as Node['topic'],
          status: 'locked',
          progress: 0,
          position: { x: 0, y: 0 },
        },
        {
          id: `${section.title}-placeholder-2`,
          title: 'Coming Soon',
          topic: section.topic as Node['topic'],
          status: 'locked',
          progress: 0,
          position: { x: 0, y: 0 },
        },
      ];

      const nodes = [...baseNodes, ...placeholders].map((node, index) => {
        const xOffset = isMobile ? 0 : index % 2 === 0 ? -80 : 80;
        const yOffset = index * 190;
        return {
          ...node,
          position: { x: xOffset, y: yOffset },
        };
      });
      return { ...section, nodes };
    });
  }, [roadmapSections, isMobile]);

  const layoutNodes = useMemo(() => {
    return layoutSections.flatMap((section) => section.nodes);
  }, [layoutSections]);

  const topicProgress = useMemo(() => {
    const progress: Record<string, { total: number; completed: number }> = {};
    dashboardNodes.forEach((node) => {
      if (!progress[node.topic]) {
        progress[node.topic] = { total: 0, completed: 0 };
      }
      progress[node.topic].total += 1;
      if (node.status === 'completed') {
        progress[node.topic].completed += 1;
      }
    });
    return progress;
  }, [dashboardNodes]);

  const topicCompletion = useMemo(() => {
    if (!activeTopic) return { completed: 0, total: 0 };
    const progress = topicProgress[activeTopic] || { total: 0, completed: 0 };
    return progress;
  }, [activeTopic, topicProgress]);

  const roadmapTitle = useMemo(() => {
    const labelMap: Record<string, string> = {
      OS: 'Operating Systems',
      DB: 'Databases',
      Networking: 'Networking',
      'Distributed Systems': 'Distributed Systems',
      'System Design': 'System Design',
    };
    return labelMap[activeTopic] || activeTopic || 'Roadmap';
  }, [activeTopic]);

  const roadmapSidebarSections = useMemo(() => {
    const activeRoadmap = roadmaps.find((topic) => topic.topic === activeTopic);
    if (activeRoadmap && activeRoadmap.sections.length > 0) {
      return activeRoadmap.sections.map((section) => section.title);
    }
    return roadmapSections.map((section) => section.title);
  }, [roadmaps, activeTopic, roadmapSections]);

  const streakLabel = useMemo(() => {
    if (!streakMonth) return '';
    return new Date(streakMonth.year, streakMonth.month - 1, 1).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
  }, [streakMonth]);

  const streakGrid = useMemo(() => {
    if (!streakMonth) return { blanks: 0, days: [] as { date: string; completed: boolean }[] };
    const firstDayIndex = new Date(streakMonth.year, streakMonth.month - 1, 1).getDay();
    return { blanks: firstDayIndex, days: streakMonth.days };
  }, [streakMonth]);

  const xpProgress = Math.min(
    100,
    Math.round((stats.totalXP / Math.max(1, stats.totalXP + stats.xpToNext)) * 100)
  );

  return (
    <div className="min-h-screen bg-background">
      <LearningNavbar
        userName={user?.name}
        userEmail={user?.email}
        xp={stats.totalXP}
        streak={stats.level}
        roadmapTopics={roadmaps.map((topic) => topic.topic)}
        activeTopic={activeTopic}
        onSelectTopic={setActiveTopic}
      />
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 pb-24 lg:grid-cols-12">
        {/* Left Sidebar - Stats */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
          {user && (
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <h2 className="mb-2 text-xl font-bold text-white">Welcome back, {user.name}!</h2>
              <p className="text-sm text-white/50">{user.email}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                <span>Currently studying</span>
                <span className="text-gold/80">{currentTopics.join(', ') || activeTopic || 'Getting started'}</span>
              </div>
            </div>
          )}

          {/* <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">Daily Goals</h2>
            <div className="space-y-4">
              {goals.map((goal, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">{goal.label}</span>
                    <span className="font-bold text-primary">{goal.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">Your Progress</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/60">
                  <Star size={16} className="text-primary" />
                  <span className="text-sm">⚡ Total XP</span>
                </div>
                <span className="font-bold">{stats.totalXP.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/60">
                  <Target size={16} className="text-primary" />
                  <span className="text-sm">🏆 Current Level</span>
                </div>
                <span className="font-bold">{stats.level}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full bg-primary glow-gold" style={{ width: `${xpProgress}%` }} />
              </div>
              <p className="text-center text-[10px] text-white/20">{stats.xpToNext} XP to next level</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">Achievements</h2>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary/40">
                  <Trophy size={20} />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - Skill Tree */}
        <main className="lg:col-start-5 lg:col-span-5">
          <div className="relative flex flex-col items-center py-2 md:py-12 lg:pl-6">
            {isMobile && user && (
              <div className="w-full max-w-md mb-8">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Welcome back, <span className="text-gold">{user.name}</span>!
                </h2>
                <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-black-deep via-black-deep/95 to-gold/10 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gold/20 bg-black-deep/50 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">⚡ XP</p>
                    <p className="text-sm font-bold">{stats.totalXP.toLocaleString()}</p>
                  </div>
                  <div className="rounded-xl border border-gold/20 bg-black-deep/50 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">🏆 Level</p>
                    <p className="text-sm font-bold">{stats.level}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-black-deep/50 p-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40">
                    <span>Progress</span>
                    <span className="text-white/70">
                      {topicCompletion.completed}/{topicCompletion.total}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full bg-primary glow-gold"
                      style={{
                        width: `${
                          topicCompletion.total
                            ? Math.round((topicCompletion.completed / topicCompletion.total) * 100)
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-[10px] text-white/50">
                    Currently studying: {currentTopics.join(', ') || activeTopic || 'Getting started'}
                  </p>
                </div>
                {/* <div className="mt-5 rounded-2xl border border-white/10 bg-black-deep/60 p-4">
                  <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white/50">Daily Goals</h3>
                  <div className="space-y-3">
                    {goals.map((goal, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">{goal.label}</span>
                          <span className="font-bold text-primary">{goal.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${goal.progress}%` }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
                </div>
              </div>
            )}
            <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
              <div className="text-center text-3xl font-bold uppercase tracking-widest text-gold">
                {roadmapTitle}
              </div>
              {layoutSections.map((section, sectionIndex) => (
                <div key={section.title} className="w-full flex flex-col items-center relative">
                  <div className="mb-16 text-2xl font-bold uppercase tracking-widest text-gold">
                    {section.title}
                  </div>
                  {(() => {
                    const slantOffset = 22;
                    const direction = sectionIndex % 2 === 0 ? -1 : 1;
                    return (
                      <div className="relative w-full max-w-[300px] px-4 md:px-0">
                        <div className="relative z-10 flex w-full flex-col gap-6">
                          {section.nodes.map((node, index) => (
                            <div
                              key={node.id}
                              className="flex w-full h-[170px] items-center justify-center"
                              style={{ transform: `translateX(${index * slantOffset * direction}px)` }}
                            >
                              <SkillNode
                                node={node}
                                isLast={index === section.nodes.length - 1}
                                onClick={handleNodeClick}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/60 bg-black-deep text-gold shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                    <span className="text-2xl">🎁</span>
                  </div>
                  {sectionIndex < layoutSections.length - 1 && (
                    <div className="my-10 h-px w-full bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:flex lg:col-start-10 lg:col-span-3 lg:justify-end">
          <div className="w-full max-w-[260px] space-y-6 translate-x-10">
            <div className="rounded-2xl border border-gold/20 bg-gradient-to-b from-black-deep/90 via-black-deep/70 to-black-deep/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold/90">Roadmap</h2>
            <div className="space-y-3">
              {roadmapSidebarSections.length === 0 ? (
                <div className="text-xs text-white/50">No sections yet</div>
              ) : (
                roadmapSidebarSections.map((title) => (
                  <div
                    key={title}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-white/80"
                  >
                    {title}
                  </div>
                ))
              )}
            </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-black-deep/90 via-black-deep/70 to-black-deep/50 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-300">Streak</h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/80">
                  {streakMonth?.days.filter((day) => day.completed).length ?? 0} Days
                </span>
              </div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-emerald-200/80">
                {streakLabel || 'This Month'}
              </p>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: streakGrid.blanks }).map((_, index) => (
                  <div key={`blank-${index}`} className="h-4 w-4" />
                ))}
                {streakGrid.days.map((day) => {
                  const dayNumber = Number(day.date.split('-')[2]);
                  return (
                    <div
                      key={day.date}
                      className={`h-4 w-4 rounded-[4px] border ${
                        day.completed
                          ? 'border-emerald-300/60 bg-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.55)]'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <span className="sr-only">{dayNumber}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-emerald-200/70">
                Updates when you complete a node
              </p>
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
