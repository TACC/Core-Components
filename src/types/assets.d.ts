declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// FAQ: Other asset typings could be for `.png`, `.jpg`, `.svg`; e.g.
/*
declare module '*.svg' {
   const content: string;
   export default content;
}
*/
