export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt?: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/-+/g, '_'); // Replace multiple hyphens with single underscore
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Beachfront Investment Opportunities in Punta Cana 2025",
    slug: "top_5_beachfront_investment_opportunities_in_punta_cana_2025",
    excerpt: "Discover lucrative beachfront properties in Punta Cana's most promising areas. Analysis of current market trends and ROI potential.",
    content: `
      <h2>The Rise of Punta Cana's Beachfront Real Estate</h2>
      <p>Punta Cana continues to be one of the Caribbean's most sought-after destinations for beachfront property investment. With its pristine beaches, world-class amenities, and growing tourism sector, the region presents compelling opportunities for real estate investors in 2025.</p>

      <h3>Top Investment Locations</h3>
      <ol>
        <li>
          <strong>Cap Cana</strong>
          <p>Luxury marina development with high-end properties and exclusive amenities. Average ROI: 8-12% annually.</p>
        </li>
        <li>
          <strong>Bavaro Beach</strong>
          <p>Popular tourist area with consistent rental demand. Property values increased 15% in the past year.</p>
        </li>
        <li>
          <strong>Cabeza de Toro</strong>
          <p>Up-and-coming area with new developments and attractive price points.</p>
        </li>
        <li>
          <strong>Arena Gorda</strong>
          <p>Beachfront condos with strong rental potential near major resorts.</p>
        </li>
        <li>
          <strong>Macao Beach</strong>
          <p>Emerging luxury segment with new development projects announced.</p>
        </li>
      </ol>

      <h3>Investment Considerations</h3>
      <ul>
        <li>Property appreciation rates averaging 6-10% annually</li>
        <li>Strong rental yields during peak tourist seasons</li>
        <li>New infrastructure developments improving accessibility</li>
        <li>Growing demand from international buyers</li>
      </ul>

      <h3>Market Analysis</h3>
      <p>The Punta Cana real estate market has shown remarkable resilience and growth. Beachfront properties, in particular, have maintained strong appreciation rates even during global economic fluctuations. The region's continuing infrastructure development, including the expansion of the Punta Cana International Airport and new highway connections, further enhances the investment potential.</p>

      <h3>Legal Considerations</h3>
      <p>Foreign investors enjoy the same property rights as Dominican Republic citizens. However, it's essential to work with reputable real estate agents and legal professionals to ensure proper due diligence and documentation.</p>

      <h2>Conclusion</h2>
      <p>Punta Cana's beachfront property market offers attractive opportunities for investors seeking both appreciation potential and rental income. With careful location selection and proper due diligence, investors can capitalize on the region's growing tourism industry and real estate market.</p>
    `,
    category: "Investment",
    author: "Maria Rodriguez",
    date: "April 15, 2025",
    image: "/property-1.jpg"
  },
  {
    id: 2,
    title: "Complete Guide to Buying Property in the Dominican Republic",
    slug: "complete_guide_to_buying_property_in_the_dominican_republic",
    excerpt: "Everything foreign buyers need to know about Dominican real estate: legal requirements, processes, and expert recommendations.",
    content: `
      <h2>Understanding Dominican Republic Real Estate Purchase Process</h2>
      <p>Buying property in the Dominican Republic can be a straightforward process when you understand the key steps and requirements. This comprehensive guide will walk you through everything you need to know.</p>

      <h3>Legal Requirements for Foreign Buyers</h3>
      <p>The Dominican Republic welcomes foreign investment in real estate, offering the same property rights to foreigners as to citizens. Here are the key legal considerations:</p>
      <ul>
        <li>Valid passport and tax identification number (local or foreign)</li>
        <li>No special permits required for property purchase</li>
        <li>Equal property rights under Dominican law</li>
        <li>Right to transfer funds internationally</li>
      </ul>

      <h3>The Purchase Process</h3>
      <ol>
        <li>
          <strong>Property Selection</strong>
          <p>Work with a reputable real estate agent to find properties that match your criteria.</p>
        </li>
        <li>
          <strong>Due Diligence</strong>
          <p>Verify property titles, permits, and potential liens or encumbrances.</p>
        </li>
        <li>
          <strong>Purchase Agreement</strong>
          <p>Sign a formal purchase agreement (Promise of Sale) with the seller.</p>
        </li>
        <li>
          <strong>Title Search</strong>
          <p>Conduct a thorough title search through the Property Registry.</p>
        </li>
        <li>
          <strong>Closing Process</strong>
          <p>Final deed signing and registration with the Property Registry.</p>
        </li>
      </ol>

      <h3>Important Documentation</h3>
      <ul>
        <li>Property deed (Certificado de Título)</li>
        <li>Tax clearance certificate</li>
        <li>Property survey (if required)</li>
        <li>Purchase agreement</li>
        <li>Property registration documents</li>
      </ul>

      <h3>Financial Considerations</h3>
      <p>Beyond the purchase price, buyers should be aware of additional costs:</p>
      <ul>
        <li>Legal fees (1-2% of property value)</li>
        <li>Property transfer tax (3%)</li>
        <li>Title registration fees</li>
        <li>Real estate agent commission (typically paid by seller)</li>
      </ul>

      <h2>Expert Recommendations</h2>
      <ul>
        <li>Work with experienced local real estate professionals</li>
        <li>Obtain independent legal representation</li>
        <li>Never make cash payments without proper documentation</li>
        <li>Consider property insurance and management services</li>
      </ul>

      <h2>Conclusion</h2>
      <p>While buying property in the Dominican Republic involves several steps, the process can be smooth with proper guidance and preparation. Understanding these requirements and working with qualified professionals will help ensure a successful property purchase.</p>
    `,
    category: "Legal Guide",
    author: "John Smith",
    date: "April 10, 2025",
    image: "/property-2.jpg"
  },
  {
    id: 3,
    title: "2025 Market Analysis: Santo Domingo Luxury Real Estate",
    slug: "2025_market_analysis_santo_domingo_luxury_real_estate",
    excerpt: "In-depth analysis of Santo Domingo's luxury property market, including price trends and neighborhood insights.",
    content: `
      <h2>Santo Domingo Luxury Real Estate Market Overview 2025</h2>
      <p>The luxury real estate market in Santo Domingo continues to evolve, with new developments and increasing international interest driving growth in key neighborhoods.</p>

      <h3>Market Trends</h3>
      <p>The luxury segment has shown remarkable growth in 2025, with several key trends emerging:</p>
      <ul>
        <li>20% increase in luxury property values year-over-year</li>
        <li>Growing demand from international buyers</li>
        <li>Rise in sustainable and smart home features</li>
        <li>Increased focus on amenities and security</li>
      </ul>

      <h3>Premium Neighborhoods</h3>
      
      <h4>1. Piantini</h4>
      <p>The financial district's crown jewel, featuring:</p>
      <ul>
        <li>Average price: $3,500/m²</li>
        <li>High-rise luxury condominiums</li>
        <li>Premium office space integration</li>
        <li>Upscale shopping and dining</li>
      </ul>

      <h4>2. Naco</h4>
      <p>Traditional luxury neighborhood known for:</p>
      <ul>
        <li>Average price: $3,200/m²</li>
        <li>Exclusive gated communities</li>
        <li>International schools nearby</li>
        <li>Established high-end retail</li>
      </ul>

      <h4>3. Bella Vista</h4>
      <p>Emerging luxury market featuring:</p>
      <ul>
        <li>Average price: $2,800/m²</li>
        <li>Modern residential towers</li>
        <li>Growing entertainment district</li>
        <li>Strong appreciation potential</li>
      </ul>

      <h3>Investment Analysis</h3>
      <p>Key factors driving the luxury market:</p>
      <ul>
        <li>Economic stability and growth</li>
        <li>Infrastructure improvements</li>
        <li>International business expansion</li>
        <li>Tourism sector growth</li>
      </ul>

      <h3>Property Types in Demand</h3>
      <ol>
        <li>
          <strong>Luxury Condominiums</strong>
          <p>High-rise units with ocean or city views, modern amenities, and security.</p>
        </li>
        <li>
          <strong>Penthouses</strong>
          <p>Exclusive top-floor residences with private terraces and premium finishes.</p>
        </li>
        <li>
          <strong>Villa Estates</strong>
          <p>Spacious family homes in gated communities with extensive grounds.</p>
        </li>
      </ol>

      <h3>Future Outlook</h3>
      <p>The Santo Domingo luxury real estate market shows strong potential for continued growth, supported by:</p>
      <ul>
        <li>Planned infrastructure improvements</li>
        <li>Growing international investment</li>
        <li>Stable political environment</li>
        <li>Strong tourism sector</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Santo Domingo's luxury real estate market presents attractive opportunities for both investors and end-users, with strong fundamentals supporting continued growth in the sector.</p>
    `,
    category: "Market Updates",
    author: "Ana Gómez",
    date: "April 5, 2025",
    image: "/property-3.jpg"
  }
];
