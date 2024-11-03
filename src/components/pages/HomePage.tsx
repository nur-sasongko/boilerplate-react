import { cn } from "@/plugins/cn";

interface HomePageProps {
  title?: string;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { title = "Homepage" } = props;
  return (
    <>
      <div
        className={cn(
          "text-3xl font-bold underline",
          title === "Homepage" ? "text-red-400" : "text-blue-500",
        )}
      >
        {title}
      </div>
    </>
  );
};

export default HomePage;
