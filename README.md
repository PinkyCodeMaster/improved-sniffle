# Next.js 15 with ShadCN UI, tRPC, Drizzle ORM, Stripe, and Clerk Authentication

This is a template project that sets up a Next.js 15 app with the App Router, Tailwind CSS, ShadCN UI, and dark mode support.

## Future Plans

The following features will be integrated in the future:

- **tRPC**: Type-safe API routes for easy backend communication.
- **Drizzle ORM**: A lightweight ORM for interacting with your database.
- **Stripe**: Payment processing integration for handling payments.
- **Clerk Authentication**: Provides user authentication out of the box.

## Features (Current)

- **Next.js 15 App Router**: Uses the App Router to manage pages and API routes.
- **ShadCN UI**: A component library built with Tailwind CSS and Radix UI to help you quickly create beautiful UIs.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Dark Mode Support**: Full support for light and dark themes using `next-themes` and Tailwind CSS.

## Installation

Follow these steps to set up the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/PinkyCodeMaster/improved-sniffle.git
    cd improved-sniffle
    ```

2. Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

3. Set up environment variables by copying the example environment file:

    ```bash
    cp .env.example .env.local
    ```

4. Edit `.env.local` with your actual keys and settings:

    ```env
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-public-key
    STRIPE_SECRET_KEY=your-secret-key
    NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
    ```

5. Run the app locally:

    ```bash
    pnpm run dev
    ```

## Usage

- **ShadCN UI**: Use the UI components for your app's frontend.
- **Dark Mode**: The app supports both light and dark modes. Use the provided **theme toggle** to switch between modes.
- **Future Features**: The upcoming releases will include full integration for **tRPC**, **Drizzle ORM**, **Stripe**, and **Clerk Authentication** to support backend logic, database operations, payments, and user authentication.

## Folder Structure

```
src/
  app/
    favicon.ico
    layout.tsx
    page.tsx
  components/
    layout/
      footer.tsx            # Footer component
      header.tsx            # Header component
      mode-toggle.tsx       # Mode toggle (dark/light theme)
      theme-provider.tsx    # Theme provider for next-themes integration
    ui/
      accordion.tsx
      alert.tsx
      alert-dialog.tsx
      button.tsx
      aspect-ratio.tsx
      avatar.tsx
      badge.tsx
      breadcrumb.tsx
      calendar.tsx
      card.tsx
      carousel.tsx
      chart.tsx
      checkbox.tsx
      collapsible.tsx
      command.tsx
      dialog.tsx
      context-menu.tsx
      drawer.tsx
      dropdown-menu.tsx
      form.tsx
      label.tsx
      hover-card.tsx
      input.tsx
      input-otp.tsx
      menubar.tsx
      navigation-menu.tsx
      pagination.tsx
      popover.tsx
      progress.tsx
      radio-group.tsx
      resizable.tsx
      scroll-area.tsx
      select.tsx
      separator.tsx
      sheet.tsx
      sidebar.tsx
      tooltip.tsx
      skeleton.tsx
      slider.tsx
      sonner.tsx
      switch.tsx
      table.tsx
      tabs.tsx
      textarea.tsx
      toast.tsx
      toaster.tsx
      toggle.tsx
      toggle-group.tsx
  hooks/
    use-mobile.tsx
    use-toast.tsx
  lib/
    utils.ts
  styles/
    globals.css
env.local.example

```

## License

This project is licensed under the MIT License.

---

### Technologies Used

- **Next.js 15**
- **ShadCN UI**
- **Tailwind CSS**
