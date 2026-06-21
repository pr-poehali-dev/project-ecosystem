import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/91dc9232-614a-46a0-a768-532b8312b54f/files/64eaede3-2d11-4f9b-afa2-1b569c45f7a6.jpg',
  'https://cdn.poehali.dev/projects/91dc9232-614a-46a0-a768-532b8312b54f/files/7e8c2e26-1b9b-4b69-9e3d-bdf5a3efbe59.jpg',
  'https://cdn.poehali.dev/projects/91dc9232-614a-46a0-a768-532b8312b54f/files/fabeb372-a4cd-4048-86e7-0c2a40ab7728.jpg',
];

const services = [
  { icon: 'ShoppingCart', label: 'Продажа' },
  { icon: 'Wrench', label: 'Монтаж' },
  { icon: 'Settings', label: 'Сервис' },
  { icon: 'Hammer', label: 'Ремонт' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/91dc9232-614a-46a0-a768-532b8312b54f/files/7a12f68f-83d0-4134-a2be-7c27bfa014c5.jpg"
                  alt="Специалист по климатическому оборудованию"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Климат<span className="font-semibold">Сервис</span>
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Климатическое оборудование под ключ
                </p>
                <p className="max-w-md text-base font-light text-white/60">
                  Продажа, монтаж, сервисное обслуживание и ремонт кондиционеров.
                  Работаем для вашего комфорта в любое время года.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {services.map((service) => (
                    <div
                      key={service.label}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
                    >
                      <Icon name={service.icon} size={18} className="text-white" />
                      <span className="text-sm font-light text-white">{service.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="tel:+70000000000"
                    className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105"
                  >
                    <Icon name="Phone" size={20} />
                    Позвонить
                  </a>
                  <a
                    href="https://wa.me/70000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}