import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';

export default function CustomCursor() 
{
  // const { position, isDesktop } = useCursor();

  // if (!isDesktop) return null;

  // return (
  //   <>
  //     <motion.div
  //       className="custom-cursor"
  //       animate={{
  //         x: position.x - 10,
  //         y: position.y - 10,
  //       }}
  //       transition={{ type: "spring", stiffness: 500, damping: 28 }}
  //     />
  //     <motion.div
  //       className="cursor-dot"
  //       animate={{
  //         x: position.x - 2,
  //         y: position.y - 2,
  //       }}
  //       transition={{ type: "spring", stiffness: 800, damping: 30 }}
  //     />
  //   </>
  // );
}
