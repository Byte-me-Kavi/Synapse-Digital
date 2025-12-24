import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://synapsedigital.dev';

    // Core pages
    const routes = [
        '',
        '/pricing',
        '/projects',
        '/services',
        '/social-media-management', // High priority service
        '/contact',
        '/about',
        '/privacy',
        '/terms',
        '/refund-policy',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
