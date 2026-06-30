export const createProductSchema = (productName, description) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productName,
  description,
  brand: {
    '@type': 'Brand',
    name: 'Maya Industries'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Maya Industries'
  }
});

export const createFAQSchema = (faqItems) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
});
