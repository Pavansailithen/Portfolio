import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    try:
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            # Namespace for Word processing XML elements
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_runs = []
            for paragraph in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                p_text = []
                for text in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                    if text.text:
                        p_text.append(text.text)
                if p_text:
                    text_runs.append("".join(p_text))
            
            return "\n".join(text_runs)
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    text = get_docx_text('dist/Lithin_resume.docx')
    print(text)
