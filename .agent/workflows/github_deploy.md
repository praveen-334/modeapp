---
description: How to push the Mode App to GitHub
---

# Push to GitHub

You have a local git repository with all your code committed. To put this "in GitHub":

1.  **Create a Repository on GitHub**
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `modeapp` (or whatever you prefer).
    *   **Do not** initialize with README, .gitignore, or License (you already have them).
    *   Click "Create repository".

2.  **Link and Push**
    Copy the commands from the "…or push an existing repository from the command line" section. They will look like this (replace `YOUR_USERNAME`):

    ```powershell
    // turbo
    git remote add origin https://github.com/YOUR_USERNAME/modeapp.git
    // turbo
    git branch -M main
    // turbo
    git push -u origin main
    ```

3.  **Deploy (Optional)**
    *   Once on GitHub, you can easily deploy to [Vercel](https://vercel.com) by importing that repository.
