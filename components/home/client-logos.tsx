import { cn } from "@/lib/utils";
import Image from "next/image";

interface ClientLogosProps {
  className?: string;
}

const ClientLogos = ({ className }: ClientLogosProps) => {
  const clients = [
    {
      name: "Company One",
      logo: "https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Company Two",
      logo: "https://images.pexels.com/photos/12913371/pexels-photo-12913371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Company Three",
      logo: "https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Company Four",
      logo: "https://images.pexels.com/photos/13996670/pexels-photo-13996670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className={cn("mt-16 md:mt-24", className)}>
      <p className="text-sm font-medium text-muted-foreground text-center mb-8">
        Trusted by innovative companies worldwide
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {clients.map((client) => (
          <div
            key={client.name}
            className="w-20 h-20 md:w-24 md:h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="(max-width: 768px) 116px, 136px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;