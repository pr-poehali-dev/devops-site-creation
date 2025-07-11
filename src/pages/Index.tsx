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
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#58A6FF] to-[#79C0FF] bg-clip-text text-transparent">
                DevOps Engineer
              </h1>
              <p className="text-xl text-[#8B949E] leading-relaxed">
                Автоматизирую процессы, масштабирую системы и обеспечиваю
                надежность инфраструктуры. Специализируюсь на CI/CD,
                контейнеризации и облачных технологиях.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#58A6FF] hover:bg-[#4A9EFF] text-black font-semibold">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать резюме
              </Button>
              <Button
                variant="outline"
                className="border-[#31262D] text-[#58A6FF] hover:bg-[#21262D]"
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
              <div className="text-[#58A6FF] mb-2">
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
                <Icon name="Code" size={24} className="text-[#58A6FF] mb-4" />
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
                <Icon name="Target" size={24} className="text-[#58A6FF] mb-4" />
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
                className="bg-[#21262D] border-[#31262D] hover:border-[#58A6FF] transition-colors group cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <Icon
                    name={tech.icon}
                    size={32}
                    className="text-[#58A6FF] mx-auto mb-3 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-semibold text-[#F0F6FC] mb-1">
                    {tech.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-[#31262D] text-[#8B949E] text-xs"
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
                className="bg-[#21262D] border-[#31262D] hover:border-[#58A6FF] transition-all hover:scale-105"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#F0F6FC]">
                    {project.title}
                  </h3>
                  <p className="text-[#8B949E] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-[#58A6FF] text-[#58A6FF] text-xs"
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
            <Button className="bg-[#58A6FF] hover:bg-[#4A9EFF] text-black font-semibold">
              <Icon name="Mail" size={16} className="mr-2" />
              Email
            </Button>
            <Button
              variant="outline"
              className="border-[#31262D] text-[#58A6FF] hover:bg-[#21262D]"
            >
              <Icon name="Github" size={16} className="mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-[#31262D] text-[#58A6FF] hover:bg-[#21262D]"
            >
              <Icon name="Linkedin" size={16} className="mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-[#31262D] text-[#58A6FF] hover:bg-[#21262D]"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
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
