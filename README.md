POROSIVE STUDIO Website in development

## references
checkout [references.md](references.md) to see development references


## Running Locally
  1. **Prequisite**: NodeJS and npm package manager
  2. Download the source as [zip](https://github.com/POROSIVE/porosive-website/archive/refs/heads/master.zip) or via cloning:
  ```bash
  git clone https://github.com/POROSIVE/porosive-website.git
  ```
  3. create and edit .env file:
  ```bash
  NEXT_PUBLIC_SUPABASE_URL=SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=SUPABASE_PUBLISHABLE_KEY
  ```
  4. go to app directory:
  ```bash
  cd app/
  ```
  5. run the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
  ```
  6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result(assuming the terminal return says it run on the port:3000).

## credits