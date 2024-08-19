```js
> chat-with-pdf-ai-saas@0.1.0 dev
> next dev

  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 12.7s
 ○ Compiling /middleware ...
 ✓ Compiled /middleware in 748ms (180 modules)
 ○ Compiling /dashboard ...

🌼   daisyUI 4.12.10
├─ ✔︎ 2 themes added            https://daisyui.com/ddocs/themes
╰─ ❤︎ Support daisyUI project:  https://opencollectivve.com/daisyui

 ✓ Compiled /dashboard in 11.2s (1984 modules)
(node:18100) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Compiled in 4.3s (421 modules)
 GET /dashboard 200 in 17572ms
 ○ Compiling /favicon.ico ...
 ✓ Compiled /favicon.ico in 1599ms (1592 modules)
 GET /favicon.ico 200 in 2002ms
 ○ Compiling /dashboard/upload ...
 ✓ Compiled /dashboard/upload in 2.5s (2110 modules)
 GET /dashboard/upload 200 in 3158ms
 GET /dashboard 200 in 677ms
 ○ Compiling / ...
 ✓ Compiled /dashboard/upgrade in 9.4s (2162 modules)
 GET /dashboard/upgrade 200 in 9355ms
 GET / 200 in 391ms
 GET /favicon.ico 200 in 68ms
 GET /dashboard?_rsc=3y0gy 200 in 1449ms
 GET / 200 in 83ms
 GET /dashboard?_rsc=3y0gy 200 in 492ms
--- Generating embeddings... ---
--- Fetching the download URL from Firebase... ---
--- Download URL fetched successfully: https://firebasestorage.googleapis.com/v0/b/notion-clone-598ce.appspot.com/o/users%2Fuser_2jrO1klwRHN9228nwzc1wPEfoqg%2Ffiles%2F267e4cec-1dd8-4762-919c-55a5a5d7bcba?alt=media&token=6a6136d0-72f5-4acc-bc9f-64eb54a10d29 ---     
--- Loading PDF document... ---
--- Splitting the document into smaller parts... ---
--- Split into 3 parts ---
--- Storing the embeddings in namespace 267e4cec-1dd8-4762-919c-55a5a5d7bcba in the aham Pinecone vector store... ---
 POST /dashboard/upload 200 in 16831ms
 ○ Compiling /dashboard/files/[id] ...
 ✓ Compiled /dashboard/files/[id] in 5.8s (2566 modules)
(node:13884) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 GET /dashboard/files/267e4cec-1dd8-4762-919c-55a5a5d7bcba?_rsc=g0nzx 200 in 1632ms
(node:11620) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:5136) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
DEBUG 2 { stripeCustomerId: 'cus_QYdgtAXNNq7A59', hasActiveMembership: true }
Debug 4 0 20
--- Generating embeddings... ---
--- Namespace 267e4cec-1dd8-4762-919c-55a5a5d7bcba already exists, reusing existing embeddings... ---     
--- Creating a retriever... ---
--- Fetching chat history from the firestore database... ---
--- fetched last 1 messages successfully ---
[ 'Hello, what is this document about?' ]
--- Defining a prompt template... ---
--- Creating a history-aware retriever chain... ---  
--- Defining a prompt template for answering questions... ---
--- Creating a document combining chain... ---       
--- Creating the main retrieval chain... ---
--- Running the chain with a sample conversation... ---
This document tells the story of Alex, a young coding prodigy who saved Techville's infrastructure from a critical error. It highlights Alex's coding skills, their problem-solving abilities, and their dedication to learning and improving. The document also showcases the impact of Alex's work on the city's systems and the recognition they received for their efforts.    

s the impact of Alex's work on the city's systems and the recognition they received for their efforts.    

 POST /dashboard/files/267e4cec-1dd8-4762-919c-55a5a5d7bcba 200 in 14303ms
```