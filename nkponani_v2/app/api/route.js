export const GET = async () => {
    
    try {
        
        const test = await fetch('/test')

        return new Response(JSON.stringify(test), { status: 200 })
    } catch (error) {
        return new Response("Failed", { status: 500 })
    }
} 