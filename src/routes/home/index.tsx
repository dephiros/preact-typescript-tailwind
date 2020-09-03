import { FunctionalComponent, h, RefObject } from "preact";
// import { useEffect, useRef } from "preact/hooks";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";

import * as style from "./style.css";

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      {/* <Editor /> */}
      <h1>Home</h1>
    </div>
  );
};

export default Home;

// const Editor = () => {
//   const ref: RefObject<HTMLDivElement> = useRef(null);
//   const editorRef: RefObject<EditorJS> = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       editorRef.current = new EditorJS({
//         holder: ref.current,
//         tools: { header: Header },
//       });
//     }
//     return () => editorRef.current && editorRef.current.destroy();
//   }, []);
//   return <div ref={ref}></div>;
// };
