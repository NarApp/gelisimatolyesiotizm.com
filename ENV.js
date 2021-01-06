const isServer = typeof window === 'undefined'

export default {
    SERVER: isServer,
    CLIENT: !isServer,
    
    NODE_ENV: process.env.NODE_ENV,
    PROD: process.env.NODE_ENV === 'production',
    
    // ---
    
    VERSION: process.env.NEXT_PUBLIC_VERSION,
    
    // ---
    TOKEN_SECRET: process.env.TOKEN_SECRET,

    API_SERVER: process.env.API_SERVER,
    API_CLIENT: process.env.NEXT_PUBLIC_API_CLIENT,
    API: isServer ? process.env.API_SERVER : process.env.NEXT_PUBLIC_API_CLIENT,

    // ---
    ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
}