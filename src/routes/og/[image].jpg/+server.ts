export const prerender = true;

export const GET = async () => {
    const response = await fetch('https://cdn.vox-cdn.com/thumbor/Si2spWe-6jYnWh8roDPVRV7izC4=/0x0:1192x795/1400x788/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg');
    const buffer = await response.arrayBuffer();
    return new Response(buffer, {
        headers: {
            'Content-Type': 'image/jpg',
        }
    });
}