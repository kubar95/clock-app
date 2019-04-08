export default function addTextToHtmlTag(className, content) {
    const element = document.getElementsByClassName(className);
    if (content < 10)
      content = content.toString().padStart(2, '0')
    element[0].textContent = content
  }