import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
	"/(private)/$workspace_id/pipelining/"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1 className="text-2xl font-bold">Infrastructure</h1>
			<p className="text-sm text-muted-foreground"></p>
		</div>
	);
}
