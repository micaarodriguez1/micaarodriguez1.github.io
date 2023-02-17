
const doc = new jsPDF();
const btn = document.querySelector('#boton');
function generarPDF()
{
    alert('entro')
    doc.text("Hello world!", 1, 1);
doc.save("two-by-four.pdf");
}
