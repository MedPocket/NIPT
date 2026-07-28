# Instructions for AI Agents (AGENTS.md)

Welcome! This repository is a documentation website for NIPT (Cẩm nang sàng lọc xét nghiệm NIPT) built using the **Blume** framework, which is powered by Astro and Vite.

Follow these guidelines, commands, and rules when working in this codebase.

## Codebase Overview & Structure

- **`docs/`**: Contains all Markdown (`.md`) and MDX (`.mdx`) documentation source files.
- **`public/`**: Static assets (images, icons, etc.).
- **`blume.config.ts`**: The main configuration file for the Blume framework.
- **`theme.css`**: Styling file for custom styles.
- **`package.json` & `bun.lock`**: Dependency definition and lockfile. The project uses Bun as the package manager and runtime.

## Core Rules & Conventions

1. **Markdown/MDX Content Files**:
   - Blume automatically discovers and compiles all content files in the `docs/` directory.
   - Every `.md` or `.mdx` file **MUST** contain valid YAML frontmatter with at least `title` and `description` defined. E.g.:
     ```yaml
     ---
     title: "My Page Title"
     description: "A description of the page content."
     ---
     ```
2. **Directory and Sidebar Organization**:
   - Subdirectories inside `docs/` represent sidebar sections.
   - You can configure custom titles, icons, sorting orders, and collapsible options for each section by placing a `meta.ts` file in the subdirectory.
   - This `meta.ts` file must default-export `defineMeta` imported from `blume`. Example:
     ```typescript
     import { defineMeta } from "blume";

     export default defineMeta({
       title: "My Section",
       order: 1,
       collapsed: false,
     });
     ```

## Key Commands

Use **Bun** to install dependencies and run all project-related scripts:

- **Install Dependencies**:
  ```bash
  bun install
  ```
- **Local Development Server**:
  ```bash
  bun run dev
  ```
- **Build Static Site**:
  ```bash
  bun run build
  ```
  *Caution*: Running `bun run build` while the local development server is active can result in build/runtime conflicts. Ensure the dev server is stopped, or run the build with the `--isolated` flag if necessary.
- **Run Typechecking**:
  ```bash
  bun run typecheck
  ```
  This command executes `blume check` to validate markdown/MDX files, frontmatter, and overall type safety of the pages.
- **Lint Code**:
  ```bash
  bun run lint
  ```
  This executes `oxlint` to lint codebase scripts and configuration files.

## Guidelines for Making Changes

- **Avoid modifying build artifacts directly**: Do not modify files in any `dist/`, `build/`, or static output folders. Always modify source files under `docs/` or script files directly.
- **Pre-commit checks**: Always execute `bun run lint`, `bun run typecheck`, and `bun run build` to verify there are no compilation or syntax errors before finishing your work.
