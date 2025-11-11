import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="px-4">
      <Outlet />
    </div>
  ),
})
