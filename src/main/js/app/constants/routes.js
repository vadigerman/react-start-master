// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

// Index route
export const state = () => `/${publicPath}/state`;

// Index route
export const rest = () => `/${publicPath}/rest`;

// Index route
export const counter = () => `/${publicPath}/counter`;

// Index websocket
export const webSocket = () => `/${publicPath}/websocket`;

// Index upload
export const upload = () => `/${publicPath}/upload`;
