var canUseDOM = !!(typeof window !== "undefined" &&
    window.document &&
    window.document.createElement);
var isEnabled = false;
var MOUSE_MOVE_THRESHOLD = 1000;
var lastTouchTimestamp = 0;
function enableMouse() {
    if (isEnabled || Date.now() - lastTouchTimestamp < MOUSE_MOVE_THRESHOLD) {
        return;
    }
    isEnabled = true;
}
function disableMouse() {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
        isEnabled = false;
    }
}
if (canUseDOM) {
    document.addEventListener("touchstart", disableMouse, true);
    document.addEventListener("touchmove", disableMouse, true);
    document.addEventListener("mousemove", enableMouse, true);
}
export function isMouseEnabled() {
    return isEnabled;
}
