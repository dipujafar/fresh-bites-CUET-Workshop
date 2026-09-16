import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight } from "lucide-react";

export default function Categories() {
  return (
    <div className="bg-primary-bg-color py-12">
      <Container>
        {/* section header */}
        <div className="flex justify-between items-center">
          <SectionTitle
            subTitle="CATEGORIES"
            title="What are you craving today?"
          />
          <p className="text-primary-color hover:scale-105 flex items-center">
            {" "}
            See All <ChevronRight size={16} />
          </p>
        </div>
      </Container>
    </div>
  );
}
