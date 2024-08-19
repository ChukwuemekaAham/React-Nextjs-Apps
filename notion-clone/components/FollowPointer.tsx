import stringToColor from "@/lib/stringToColor";
import { motion } from "framer-motion";

function FollowPointer({
  x,
  y,
  info,
}: {
  x: number;
  y: number;
  info: { name: string; email: string; avatar: string };
}) {
  const color = stringToColor(info.email || "1");
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={color}
        stroke={color}
        strokeWidth="1"
        height="1em"
        width="1em"
        className={`h-6 w-6 text-[${color}] transform -rotate-[70deg]
         -translate-x-[12px] -translate-y-[10px] stroke=[${color}]`}
      >
        <path
          d="M14.082 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75
         9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 
         6c-.54 0-.828.403-.828.75v4.5c0 .347.288.75.828.75H12a.75.75 
         0 000-1.5h-1.875v-3h3.375a.75.75 0 000-1.5H9.375z"
        />
      </svg>
      <motion.div
        className="px-2 py-2 bg-neutral-200 text-black font-bold 
        whitespace-nowrap min-w-max text-xs rounded-full"
        style={{
          backgroundColor: color,
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
      >
        {info?.name || info.email}
      </motion.div>
    </motion.div>
  );
}

export default FollowPointer;
