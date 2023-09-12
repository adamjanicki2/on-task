import { create } from "zustand";
import { persist } from "zustand/middleware";

const DEFAULT_CONTENT = `# Welcome to OnTask!

OnTask is a super simple and lightweight task/list manager that uses Markdown to format your tasks.
You can do a lot of things with the built-in Markdown feature.

**IMPORTANT**: _This app uses local storage to save your notes, so if you clear your browser cache/cookies, your progress will be lost. This is supposed to be a lightweight and fun tool, so I didn't want to implement any database storage, as that would require you to log in. So don't store anything here that you don't mind accidentally deleting!_

## Lists

You can add both numbered and bulleted lists to **OnTask**.

**My favorite movie list:**
1. Interstellar
2. Alien
3. Jurassic Park

**Things to do today:**
- Build **OnTask**.
- Write this guide that you're currently reading.

## Text Flavor

You can use Markdown to add flavor to your notes and tasks. Try adding _italics_, **bold text**, ~strikethrough~, or \`code\`.

## Links & More

You can add links and other references to your notes. It can either be directly pasted: https://adamjanicki.xyz/, or hyperlinked to text: [Adam's personal site](/)

Fun images can be included if you choose!

![Adamovies Logo](https://www.adamovies.com/images/logo192.png)

## Miscellaneous Features

You can add horizontal rules to divide sections:

---

Need to organize data as a table? You can do that too!

**Sci-Fi Movies**

| Title | Release Year | Score |
| ---- | ------------- | ------ |
| [Alien](https://adamovies.com/review/Alien) | 1979 | 94% |
| [2001: A Space Odyssey](https://adamovies.com/review/2001:_A_Space_Odyssey) | 1968 | 76% |
| [Tenet](https://adamovies.com/review/Tenet) | 2020 | 89% |
`;

type SavedContentStore = {
  content: string;
  setContent: (value: string) => void;
};

const useSavedContent = create(
  persist<SavedContentStore>(
    (set) => ({
      content: DEFAULT_CONTENT,
      setContent: (value) => set(() => ({ content: value })),
    }),
    {
      name: "on-task-saved-content",
      getStorage: () => localStorage,
    }
  )
);

export default useSavedContent;
