// WhatsApp share button functionality
document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.querySelector('.whatsapp-btn02');
  const phoneInput = document.querySelector('.whatsapp-share input[type="text"]');
  const cwhatsappBtn = document.querySelector('.cwhatsapp-btn');
  const contactname=document.querySelector('.cwhatsapp-share input[type="text"]');
  const contacttel=document.querySelector('.cwhatsapp-share input[type="tel"]');
  const contactemail=document.querySelector('.cwhatsapp-share input[type="email"]');
  const contactmsg=document.querySelector('.cwhatsapp-share textarea[type="text"]');

  whatsappBtn.addEventListener('click', () => {
    let phone = phoneInput.value.trim();
    if (!phone) {
      alert('Please enter a phone number');
      return;
    }
    // Remove any non-digit characters
    phone = phone.replace(/\D/g, '');
    if (phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    const url = `https://wa.me/${phone}`;
    window.open(url, '_blank');
  });

  cwhatsappBtn.addEventListener('click',() =>{
    let name=contactname.value.trim();
    let tel=contacttel.value.trim();
    let mail=contactemail.value.trim();
    let msg=contactmsg.value.trim();
    const url01= `https://wa.me/9773216417?text=Name:%20${name}%20Email:%20${mail}%20Mobile:%20${tel}%20Message:%20${msg}`;
    window.open(url01, '_blank');
  });

  // Save to Contacts button functionality
  const saveBtn = document.querySelector('.save-btn');
  saveBtn.addEventListener('click', () => {
    const vCard = 
`BEGIN:VCARD
VERSION:3.0
FN:BlueStone Realty-Tushar Patel
ORG:BlueStone Realty
TITLE:Founder
TEL;TYPE=WORK,VOICE:+91 9773216417
EMAIL:mail@tppatel2015@gmail.com
ADR;TYPE=WORK:;;Shiven Plaza, Adajan, Jahagirpura,Surat,Gujarat, India
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'living-rich-contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Share button functionality (simple share dialog)
  const shareBtn = document.querySelector('.share-btn');
  shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'BlueStone Realty Contact',
        text: 'Check out BlueStone Realty - Tushar Patel',
        url: window.location.href
      }).catch(console.error);
    } else {
      alert('Share not supported on this browser');
    }
  });


   window.addEventListener('DOMContentLoaded', () => {
    if (window.location.search) {
      history.replaceState({}, document.title, window.location.pathname);
    }
  });
});

