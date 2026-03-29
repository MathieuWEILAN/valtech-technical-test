import type { ParagraphBlock } from "@/types/content";
import DOMPurify from "isomorphic-dompurify";

const Paragraph = ({ data }: { data: ParagraphBlock }) => {
  const { text, highlight } = data;
  const sanitizedText = DOMPurify.sanitize(text);

  return (
    <section className="py-8">
      <div
        className={`text-link-container ${highlight ? "text-[32px]" : "text-[20px] custom-container"}`}
        dangerouslySetInnerHTML={{ __html: sanitizedText }}
      />
    </section>
  );
};

export default Paragraph;
