class ContactValidator {
  validate(contact: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(contact);
  }
}

class EmailSender {
  private contactValidator: ContactValidator;

  constructor(contactValidator: ContactValidator) {
    this.contactValidator = contactValidator;
  }

  sendEmail(contact: string, message: string): void {
    if (this.contactValidator.validate(contact)) {
      console.log(`Enviando email para ${contact}: ${message}`);
      
    } else {
      console.log(`Erro: O contato ${contact} é inválido.`);
    }
  }
}

const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);

emailSender.sendEmail("test@exemplo.com", "teste");
emailSender.sendEmail("invalid-email", "falha na validação.");