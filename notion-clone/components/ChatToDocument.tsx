"use client";

import * as Y from "yjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FormEvent, useState, useTransition } from "react";
import { BotIcon, MessageCircleCode } from "lucide-react";
import { toast } from "sonner";
import Markdown from "react-markdown";
import { Input } from "./ui/input";

type Language =
  | "english"
  | "spanish"
  | "portuguese"
  | "french"
  | "german"
  | "chinese"
  | "arabic"
  | "hindi"
  | "russian"
  | "japanese";

const languages: Language[] = [
  "english",
  "spanish",
  "portuguese",
  "french",
  "german",
  "chinese",
  "arabic",
  "hindi",
  "russian",
  "japanese",
];

function ChatToDocument({ doc }: { doc: Y.Doc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string>("");
  const [summary, setSummary] = useState("");
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleAskQuestion = async (e: FormEvent) => {
    e.preventDefault();

    setQuestion(input);

    startTransition(async () => {
      const documentData = doc.get("document-store").toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/chatToDocument`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ documentData, question: input }),
        }
      );
      if (res.ok) {
        const { message } = await res.json();

        setInput("");
        setSummary(message);
        toast.success("Question asked successfully!");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline">
        <DialogTrigger>
          <MessageCircleCode className="mr-2" />
          Chat to Document
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chat to the Document</DialogTitle>
          <DialogDescription>
            Ask a question and chat to the document with AI.
          </DialogDescription>

          <hr className="mt-5" />

          {question && <p className="mt-5 text-gray-500">Q: {question}</p>}
        </DialogHeader>

        {summary && (
          <div className="flex flex-col items-start max-h-96 overflow-y-scroll">
            <div className="flex">
              <BotIcon className="w-10 flex-shrink-0" />
              <p className="font-bold">
                GEMINI-FLASH {isPending ? " is thinking..." : "Says:"}
              </p>
            </div>
            <p>{isPending ? "Thinking..." : <Markdown>{summary}</Markdown>}</p>
          </div>
        )}
        <form className="flex gap-2" onSubmit={handleAskQuestion}>
          <Input
            type="text"
            placeholder="i.e. what is this about?"
            className="w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" disabled={!input || isPending}>
            {isPending ? "Asking..." : "Ask"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default ChatToDocument;
