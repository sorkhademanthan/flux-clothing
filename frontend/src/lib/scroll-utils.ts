export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
}
