import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);

  const commands = [
    "kubectl get pods --all-namespaces",
    "docker ps -a | grep running",
    "terraform apply -auto-approve",
    "ansible-playbook deploy.yml",
    "prometheus --config.file=prometheus.yml",
  ];

  const technologies = [
    { name: "Kubernetes", icon: "Container", category: "Orchestration" },
    { name: "Docker", icon: "Package", category: "Containerization" },
    { name: "AWS", icon: "Cloud", category: "Cloud Platform" },
    { name: "Terraform", icon: "Settings", category: "IaC" },
    { name: "Jenkins", icon: "GitBranch", category: "CI/CD" },
    { name: "Prometheus", icon: "BarChart3", category: "Monitoring" },
    { name: "Grafana", icon: "LineChart", category: "Visualization" },
    { name: "Ansible", icon: "Zap", category: "Automation" },
  ];

  const projects = [
    {
      title: "Микросервисная архитектура",
      description:
        "Автоматизация развертывания 50+ микросервисов с помощью Kubernetes и Helm",
      tech: ["Kubernetes", "Helm", "GitLab CI"],
    },
    {
      title: "Infrastructure as Code",
      description:
        "Полная автоматизация облачной инфраструктуры с помощью Terraform",
      tech: ["Terraform", "AWS", "CloudFormation"],
    },
    {
      title: "Monitoring & Alerting",
      description:
        "Система мониторинга с 99.9% uptime и автоматическими уведомлениями",
      tech: ["Prometheus", "Grafana", "AlertManager"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const command = commands[currentCommand];
      if (terminalText.length < command.length) {
        setTerminalText(command.slice(0, terminalText.length + 1));
      } else {
        setTimeout(() => {
          setTerminalText("");
          setCurrentCommand((prev) => (prev + 1) % commands.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [terminalText, currentCommand]);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FF6B35] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent animate-glow">
                DevOps Engineer
              </h1>
              <p className="text-xl text-[#8B949E] leading-relaxed">
                Автоматизирую процессы, масштабирую системы и обеспечиваю
                надежность инфраструктуры. Специализируюсь на CI/CD,
                контейнеризации и облачных технологиях.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FFA500] text-white font-semibold animate-pulse-glow transition-all duration-300">
                <Icon
                  name="Download"
                  size={16}
                  className="mr-2 animate-bounce-slow"
                />
                Скачать резюме
              </Button>
              <Button
                variant="outline"
                className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#21262D] hover:border-[#FFA500] hover:text-[#FFA500] transition-all duration-300 animate-slide-left"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>

          {/* Terminal Animation */}
          <div className="bg-[#21262D] rounded-lg border border-[#31262D] overflow-hidden">
            <div className="bg-[#161B22] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27CA3F]"></div>
              <span className="ml-4 text-sm text-[#8B949E] font-mono">
                terminal
              </span>
            </div>
            <div className="p-6 font-mono">
              <div className="text-[#FF8C42] mb-2">
                ~$ {terminalText}
                <span className="animate-pulse">|</span>
              </div>
              <div className="text-[#22C55E] text-sm opacity-60">
                ✓ All systems operational
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-[#161B22]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#F0F6FC]">
            Обо мне
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#21262D] border-[#31262D]">
              <CardContent className="p-6">
                <Icon
                  name="Code"
                  size={24}
                  className="text-[#FF8C42] mb-4 animate-float"
                />
                <h3 className="text-xl font-semibold mb-3 text-[#F0F6FC]">
                  Опыт работы
                </h3>
                <p className="text-[#8B949E] leading-relaxed">
                  5+ лет в DevOps, работал с высоконагруженными системами,
                  автоматизировал CI/CD пайплайны для команд 50+ разработчиков.
                  Сократил время развертывания с 4 часов до 15 минут.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#21262D] border-[#31262D]">
              <CardContent className="p-6">
                <Icon
                  name="Target"
                  size={24}
                  className="text-[#FF8C42] mb-4 animate-rotate-slow"
                />
                <h3 className="text-xl font-semibold mb-3 text-[#F0F6FC]">
                  Специализация
                </h3>
                <p className="text-[#8B949E] leading-relaxed">
                  Проектирую отказоустойчивые системы с 99.9% uptime. Экспертиза
                  в Kubernetes, AWS, мониторинге и автоматизации. Внедряю best
                  practices безопасности и масштабирования.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#F0F6FC]">
            Технологии
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="bg-[#21262D] border-[#31262D] hover:border-[#FF6B35] transition-all duration-500 group cursor-pointer animate-slide-up hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <CardContent className="p-4 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon
                    name={tech.icon}
                    size={32}
                    className="text-[#FF8C42] mx-auto mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse-glow relative z-10"
                  />
                  <h3 className="font-semibold text-[#F0F6FC] mb-1 relative z-10">
                    {tech.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-[#31262D] text-[#8B949E] text-xs group-hover:bg-[#FF6B35]/20 group-hover:text-[#FFA500] transition-all duration-300 relative z-10"
                  >
                    {tech.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-[#161B22]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#F0F6FC]">
            Проекты
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-[#21262D] border-[#31262D] hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 animate-fade-in group cursor-pointer"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FFA500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F0F6FC] group-hover:text-[#FFA500] transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-[#8B949E] mb-4 text-sm leading-relaxed relative z-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-[#FF6B35] text-[#FF6B35] text-xs hover:bg-[#FF6B35] hover:text-white transition-all duration-300 animate-bounce-slow"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F0F6FC]">Контакты</h2>
          <p className="text-[#8B949E] mb-8 text-lg">
            Готов обсудить ваши проекты и помочь с автоматизацией процессов
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FFA500] text-white font-semibold animate-glow hover:scale-110 transition-all duration-300">
              <Icon
                name="Mail"
                size={16}
                className="mr-2 animate-bounce-slow"
              />
              Email
            </Button>
            <Button
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#21262D] hover:border-[#FFA500] hover:text-[#FFA500] transition-all duration-300 animate-slide-left hover:scale-105"
            >
              <Icon
                name="Github"
                size={16}
                className="mr-2 animate-rotate-slow"
              />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#21262D] hover:border-[#FFA500] hover:text-[#FFA500] transition-all duration-300 animate-slide-right hover:scale-105"
            >
              <Icon
                name="Linkedin"
                size={16}
                className="mr-2 animate-pulse-glow"
              />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#21262D] hover:border-[#FFA500] hover:text-[#FFA500] transition-all duration-300 animate-float hover:scale-105"
            >
              <Icon
                name="MessageCircle"
                size={16}
                className="mr-2 animate-bounce-slow"
              />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#31262D] text-center">
        <p className="text-[#8B949E]">
          © 2024 DevOps Engineer. Автоматизирую будущее.
        </p>
      </footer>
    </div>
  );
};

export default Index;
