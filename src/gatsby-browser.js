export const onRouteUpdate = () => {
    console.log('$pageview', arguments)
    if (window.posthog) {
        window.posthog.capture('$pageview')
    }
}
