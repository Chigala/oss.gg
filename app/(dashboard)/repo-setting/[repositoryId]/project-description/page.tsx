"use client";

import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Heading from "@tiptap/extension-heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// export const metadata = {
//   title: "Project description settings",
//   description: "set up project description settings for your repo and community",
// };

export default function ProjectDescription() {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none bg-zinc-50 rounded-lg p-3 ",
      },
    },
    content: `
    <p>
      Markdown shortcuts make it easy to format the text while typing.
    </p>
    <p>
      To test that, start a new line and type <code>#</code> followed by a space to get a heading. Try <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, <code>######</code> for different levels.
    </p>
    <p>
      Those conventions are called input rules in tiptap. Some of them are enabled by default. Try <code>></code> for blockquotes, <code>*</code>, <code>-</code> or <code>+</code> for bullet lists, or <code>\`foobar\`</code> to highlight code, <code>~~tildes~~</code> to strike text, or <code>==equal signs==</code> to highlight text.
    </p>
    <p>
      You can overwrite existing input rules or add your own to nodes, marks and extensions.
    </p>
    <p>
      For example, we added the <code>Typography</code> extension here. Try typing <code>(c)</code> to see how it’s converted to a proper © character. You can also try <code>-></code>, <code>>></code>, <code>1/2</code>, <code>!=</code>, or <code>--</code>.
    </p>
    `,
  });
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}