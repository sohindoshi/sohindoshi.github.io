// Static sitemap is served from public/sitemap.xml — this file exists
// only to satisfy the router plugin's route scan.
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
