import React, { useState } from 'react';
import { FileText, Download, Users, Briefcase, Building, DollarSign, Scale, FileDown, Printer } from 'lucide-react';

const DocumentGenerator = () => {
  const [selectedDoc, setSelectedDoc] = useState('');
  const [formData, setFormData] = useState({});
  const [generatedDoc, setGeneratedDoc] = useState('');

  const documentTypes = [
    { id: 'llc', name: 'LLC Operating Agreement', icon: Users },
    { id: 'prenup', name: 'Prenuptial Agreement', icon: Scale },
    { id: 'contingency', name: 'Contingency Fee Agreement', icon: DollarSign },
    { id: 'corporation', name: 'Corporation Formation', icon: Building },
    { id: 'retainer', name: 'CA Retainer Agreement', icon: Briefcase }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatDate = (date) => {
    if (!date) return '_______________';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const generateDocument = () => {
    let doc = '';
    
    switch(selectedDoc) {
      case 'llc':
        doc = generateLLC();
        break;
      case 'prenup':
        doc = generatePrenup();
        break;
      case 'contingency':
        doc = generateContingency();
        break;
      case 'corporation':
        doc = generateCorporation();
        break;
      case 'retainer':
        doc = generateRetainer();
        break;
      default:
        doc = 'Please select a document type';
    }
    
    setGeneratedDoc(doc);
  };

  const printDocument = () => {
    // Create a new window with formatted content for printing
    const printWindow = window.open('', '_blank');
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${selectedDoc.toUpperCase()} Agreement</title>
          <style>
            @page {
              margin: 1in;
              size: letter;
            }
            body {
              font-family: 'Times New Roman', serif;
              font-size: 12pt;
              line-height: 1.6;
              color: #000;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #000;
              padding-bottom: 15px;
            }
            .law-firm {
              font-size: 16pt;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .contact-info {
              font-size: 10pt;
              color: #333;
            }
            .document-content {
              white-space: pre-wrap;
              font-family: 'Times New Roman', serif;
            }
            .signature-line {
              margin-top: 40px;
              border-bottom: 1px solid #000;
              width: 250px;
              display: inline-block;
            }
            @media print {
              .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="law-firm">LAW OFFICES OF ROZSA GYENE</div>
            <div class="contact-info">
              450 N Brand Blvd, Suite 600, Glendale, CA 91203<br>
              (818) 291-6217 • rozsagyenelaw@yahoo.com
            </div>
          </div>
          <div class="document-content">${generatedDoc.replace(/\n/g, '<br>')}</div>
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }
          </script>
        </body>
      </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const downloadPDF = () => {
    // Alternative: Create a formatted HTML version that can be saved as PDF
    const htmlContent = `
      <html>
        <head>
          <meta charset="utf-8">
          <title>${selectedDoc.toUpperCase()} Agreement</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 15px; }
            .law-firm { font-size: 18px; font-weight: bold; margin-bottom: 5px; }
            .contact-info { font-size: 12px; color: #666; }
            .content { white-space: pre-wrap; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="law-firm">LAW OFFICES OF ROZSA GYENE</div>
            <div class="contact-info">450 N Brand Blvd, Suite 600, Glendale, CA 91203<br>(818) 291-6217 • rozsagyenelaw@yahoo.com</div>
          </div>
          <div class="content">${generatedDoc}</div>
        </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedDoc}_agreement_${Date.now()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadDocument = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedDoc], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedDoc}_agreement_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateLLC = () => {
    return `LIMITED LIABILITY COMPANY AGREEMENT
of ${formData.llcName || '[Company Name]'} LLC
A California Limited Liability Company

This Limited Liability Company Agreement ("Agreement") of ${formData.llcName || '[Company Name]'} LLC, ("Company"), is executed and agreed to, for good and valuable consideration, by the undersigned members (individually, "Member" or collectively, "Members").

I. FORMATION
(a) State of Formation. This Agreement is for ${formData.llcName || '[Company Name]'} LLC, a member-managed California limited liability company formed under and pursuant to California law.

(b) Operating Agreement Controls. To the extent that the rights or obligations of the Members, or the Company under provisions of this Agreement differ from what they would be under California law absent such a provision, this Agreement, to the extent permitted under California law, shall control.

(c) Primary Business Address. The location of the primary place of business of the Company is:
${formData.businessAddress || '[Business Address]'}, or such other location as shall be selected from time to time by the Members.

(d) Registered Agent and Office. The Company's initial agent ("Agent") for service of process is ${formData.registeredAgent || '[Registered Agent Name]'}. The Agent's registered office is ${formData.agentAddress || '[Agent Address]'}. The Company may change its registered office, its registered agent, or both, upon filing a statement with the California Secretary of State.

(e) No State Law Partnership. No provisions of this Agreement shall be deemed or construed to constitute a partnership (including, without limitation, a limited partnership) or joint venture, or any Member a partner or joint venturer of or with any other Member, for any purposes other than federal and state tax purposes.

II. PURPOSES AND POWERS
(a) Purpose. The Company is created for the following business purpose:
${formData.businessPurpose || 'The purpose of the limited liability company is to engage in any lawful act or activity for which a limited liability company may be organized under the California Revised Uniform Limited Liability Company Act.'}

(b) Powers. The Company shall have all of the powers of a limited liability company set forth under California law.

(c) Duration. The Company's term shall commence upon the filing of articles of organization and all other such necessary materials with the state of California. The Company will operate until terminated as outlined in this Agreement.

III. MEMBERS
(a) Members. The Members of the Company and their membership interest at the time of adoption of this Agreement are as follows:
${formData.member1Name || '[Member 1 Name]'}, ${formData.member1Percentage || '50'} percent
${formData.member2Name || '[Member 2 Name]'}, ${formData.member2Percentage || '50'} percent

(b) Initial Contribution. Each Member shall make an initial contribution to the company as follows:
${formData.member1Name || '[Member 1 Name]'}: $${formData.member1Contribution || '100.00'}
${formData.member2Name || '[Member 2 Name]'}: $${formData.member2Contribution || '100.00'}

(c) Limited Liability of the Members. Except as otherwise provided for in this Agreement or otherwise required by California law, no Member shall be personally liable for any acts, debts, liabilities or obligations of the Company beyond their respective initial contribution.

IV. ACCOUNTING AND DISTRIBUTIONS
(a) Fiscal Year. The Company's fiscal year shall end on the last day of December.

(b) Records. All financial records including tax returns and financial statements will be held at the Company's primary business address and will be accessible to all Members.

(c) Distributions. Distributions shall be issued on a quarterly basis, based upon the Company's fiscal year. Each Member shall receive a percentage of the overall distribution that matches that Member's percentage of membership interest in the Company.

V. TAX TREATMENT ELECTION
The Company has not filed with the Internal Revenue Service for treatment as a corporation. Instead, the Company will be taxed as a pass-through organization.

[Document continues with remaining standard provisions...]

Executed as of ${formatDate(formData.executionDate) || '_______________'}

_________________________
${formData.member1Name || '[Member 1 Name]'}

_________________________
${formData.member2Name || '[Member 2 Name]'}`;
  };

  const generatePrenup = () => {
    return `PRENUPTIAL AGREEMENT

This Prenuptial Agreement ("Agreement") is made ${formatDate(formData.prenupDate) || '_______________'}, by and between ${formData.party1Name || '[Party 1 Name]'} ("${formData.party1Name || 'Party 1'}"), an adult residing in ${formData.party1Address || '[City, California]'}, and ${formData.party2Name || '[Party 2 Name]'} ("${formData.party2Name || 'Party 2'}"), an adult residing in ${formData.party2Address || '[City, California]'}, in consideration of the contemplated marriage of the above-named parties.

This Agreement shall not be effective until the marriage contemplated by the parties is solemnized.

RECITALS
This Agreement is made on the basis of the following facts:

1. The parties contemplate marriage to one another in the immediate future.

2. ${formData.previousMarriages || 'Neither party has been previously married.'}

3. The parties desire to define their rights and responsibilities regarding property and financial matters to the extent these can be foreseen.

4. ${formData.party1Name || 'Party 1'} and ${formData.party2Name || 'Party 2'} intend for this Agreement to become effective upon their marriage pursuant to the laws of the State of California, including any Uniform Premarital Agreement Act, or other applicable laws adopted by the State of California.

5. ${formData.party1Name || 'Party 1'} and ${formData.party2Name || 'Party 2'} acknowledge that they have been provided with at least seven days to review this Agreement.

6. ${formData.party1Name || 'Party 1'} and ${formData.party2Name || 'Party 2'} acknowledge that they have had the opportunity to retain their own separate legal counsel regarding the terms of this Agreement.

7. ${formData.party1Name || 'Party 1'} and ${formData.party2Name || 'Party 2'} expressly waive any other rights to disclosure of the property or financial obligations of each other beyond the disclosure provided herein.

8. ${formData.party1Name || 'Party 1'} and ${formData.party2Name || 'Party 2'} agree and affirm that they have entered into this Agreement freely and under no duress, fraud, or undue influence by the other party.

AGREEMENT

1. SEPARATE PROPERTY
Except as otherwise provided in this Agreement, the following property now owned or later acquired by either party shall remain and be their separate property:
- All property, including real or personal property, the income from such property, and the investments and re-investments of such property; and,
- All property acquired by either party by gift, devise, bequest, or inheritance.

2. EARNINGS DURING THE MARRIAGE
All earnings, salaries, commissions, income, pension, stock, stock options, or other employee benefits resulting from personal services, skills, and efforts of either party shall be and remain the sole and separate property of the acquiring party.

3. DEBTS
Each party agrees to be separately liable for his or her debts incurred prior to the marriage.

4. JOINT PROPERTY
The parties agree and understand that nothing in this Agreement shall preclude them from acquiring property interests during the course of their marriage as joint tenants with rights of survivorship or as tenants in common with undivided interests.

[Document continues with remaining provisions...]

CERTIFICATE OF INDEPENDENT LEGAL REVIEW

The undersigned hereby certifies that s/he is an attorney at law, duly licensed and admitted to practice in the State of California; that s/he has been employed by ${formData.party2Name || 'Party 2'} and that s/he has advised ${formData.party2Name || 'Party 2'} with respect to this Agreement and explained to ${formData.party2Name || 'Party 2'} the meaning and legal effect of it.

Dated ${formatDate(formData.reviewDate) || '_______________'}

__________________________________
ROZSA GYENE, ESQ.`;
  };

  const generateContingency = () => {
    return `CONTINGENCY FEE AGREEMENT FOR ${formData.caseType || 'TRUST LITIGATION'}

This CONTINGENCY FEE AGREEMENT ("Agreement") is entered into as of ${formatDate(formData.contingencyDate) || '_______________'}, between:

CLIENT: ${formData.clientName || '[Client Name]'} ("Client")

ATTORNEY: Law Offices of Rozsa Gyene, by Rozsa Gyene, Esq. (State Bar No. 208356) ("Attorney")

RE: ${formData.caseDescription || '[Case Description]'}, Case No. ${formData.caseNumber || '[Case Number]'}

RECITALS

WHEREAS, Client seeks legal representation in connection with ${formData.caseDetails || 'the above-referenced matter'};

WHEREAS, Client ${formData.priorRepresentation || 'has previously retained Attorney on an hourly basis but is unable to continue paying hourly fees'};

WHEREAS, the parties wish to ${formData.conversionReason || 'convert the representation to a contingency fee basis'};

NOW, THEREFORE, in consideration of the mutual promises contained herein, the parties agree:

1. SCOPE OF REPRESENTATION
Attorney agrees to represent Client in the above-referenced matter, including but not limited to:
${formData.scopeDetails || `• Challenging the validity of trust documents
• Pursuing claims for elder abuse, undue influence, fraud, and conversion
• Seeking recovery of real property
• Recovering damages, costs, and attorney's fees
• All proceedings through trial and post-judgment enforcement`}

2. CONTINGENCY FEE
A. Percentage Fee: Client agrees to pay Attorney the following percentage of the "gross recovery":
• ${formData.preTrialPercentage || '33'}% if the matter is resolved before trial
• ${formData.trialPercentage || '40'}% if the matter proceeds to trial, arbitration, or is appealed by any party

B. "Gross Recovery" means the total of all amounts recovered by settlement, judgment, or otherwise, whether by cash, property, or other consideration, BEFORE deduction of costs and expenses.

C. Property Recovery: If recovery includes real property, the fee percentage applies to the fair market value of the property or Client's interest therein.

3. COSTS AND EXPENSES
A. Client's Responsibility: Client remains responsible for all costs and expenses, including but not limited to:
• Filing fees
• Service of process fees
• Deposition costs
• Expert witness fees
• Court reporter fees
• Investigation costs
• Travel expenses

B. Advance of Costs: Attorney may, but is not obligated to, advance costs. Any costs advanced by Attorney shall be reimbursed from the gross recovery before calculation of attorney's fees.

4. ATTORNEY'S LIEN
A. STATUTORY LIEN: Client acknowledges that Attorney has a lien under California Code of Civil Procedure § 708.410 et seq. and California Business and Professions Code § 6146 on any recovery obtained.

B. CONTRACTUAL LIEN ON REAL PROPERTY: To secure payment of attorney's fees and costs, Client hereby grants Attorney a lien on:
• Any real property recovered in this action
• Client's interest in the property located at ${formData.propertyAddress || '[Property Address]'}
• Any proceeds from the sale or refinancing of said property

5. NO RECOVERY
If there is no recovery, Client shall not owe Attorney any attorney's fees for work performed after the date of this Agreement. However, Client remains responsible for all costs and expenses.

13. STATUTORY DISCLOSURE
"THE CONTINGENCY FEE IS NOT SET BY LAW BUT IS NEGOTIABLE BETWEEN THE ATTORNEY AND CLIENT"

CLIENT: _______________________
${formData.clientName || '[Client Name]'}
Date: ${formatDate(formData.clientSignDate) || '_______________'}

ATTORNEY: _______________________
Rozsa Gyene, Esq.
State Bar No. 208356
Date: ${formatDate(formData.attorneySignDate) || '_______________'}

LAW OFFICES OF ROZSA GYENE
450 N Brand Blvd, Suite 600
Glendale, CA 91203
(818) 291-6217
rozsagyenelaw@yahoo.com`;
  };

  const generateCorporation = () => {
    return `ARTICLES OF INCORPORATION
OF
${formData.corpName || '[CORPORATION NAME]'}, INC.

ARTICLE I - NAME
The name of this corporation is ${formData.corpName || '[CORPORATION NAME]'}, INC.

ARTICLE II - PURPOSE
This corporation is a nonprofit public benefit corporation and is not organized for the private gain of any person. It is organized under the Nonprofit Public Benefit Corporation Law for ${formData.corpPurpose || 'charitable purposes'}.

ARTICLE III - LIMITATIONS
The specific purposes for which this corporation is organized are:
${formData.specificPurpose || 'To engage in any lawful act or activity for which a corporation may be organized under the General Nonprofit Corporation Law of California.'}

ARTICLE IV - SERVICE OF PROCESS
The name and address in the State of California of this corporation's initial agent for service of process is:
${formData.corpAgent || 'Rozsa Gyene'}
${formData.corpAgentAddress || '450 N Brand Blvd, Suite 600, Glendale, CA 91203'}

ARTICLE V - MEMBERS
This corporation ${formData.hasMembers || 'shall not'} have members.

ARTICLE VI - DIRECTORS
The initial directors of the corporation shall be:
${formData.director1 || '[Director 1 Name]'}
${formData.director2 || '[Director 2 Name]'}
${formData.director3 || '[Director 3 Name]'}

ARTICLE VII - INDEMNIFICATION
The corporation shall indemnify its directors, officers, employees, and agents to the fullest extent permissible under California law.

ARTICLE VIII - DISSOLUTION
Upon the dissolution of this corporation, its assets remaining after payment, or provision for payment, of all debts and liabilities of this corporation shall be distributed to a nonprofit fund, foundation, or corporation which is organized and operated exclusively for charitable purposes and which has established its tax exempt status under Section 501(c)(3) of the Internal Revenue Code.

INCORPORATOR:
The name and address of the incorporator is:
${formData.incorporatorName || '[Incorporator Name]'}
${formData.incorporatorAddress || '[Incorporator Address]'}

Dated: ${formatDate(formData.incorporationDate) || '_______________'}

_________________________________
${formData.incorporatorName || '[Incorporator Name]'}, Incorporator

BYLAWS OF ${formData.corpName || '[CORPORATION NAME]'}, INC.

ARTICLE I - OFFICES
Section 1. Principal Office. The principal office of the corporation for the transaction of its business is located at ${formData.principalOffice || '[Principal Office Address]'}.

Section 2. Change of Address. The Board of Directors is hereby granted full power and authority to change the principal office from one location to another.

ARTICLE II - MEMBERS
Section 1. This corporation ${formData.hasMembers || 'shall not'} have members.

ARTICLE III - BOARD OF DIRECTORS
Section 1. General Powers. Subject to the provisions of the California Nonprofit Corporation Law and any limitations in the articles of incorporation and these bylaws, the business and affairs of the corporation shall be managed and all corporate powers shall be exercised by or under the direction of the Board of Directors.

Section 2. Number. The Board of Directors shall consist of ${formData.numDirectors || 'three (3)'} directors.

Section 3. Terms. Directors shall serve ${formData.directorTerms || 'three-year'} terms.

[Document continues with remaining provisions...]`;
  };

  const generateRetainer = () => {
    return `RETAINER AGREEMENT FOR LEGAL SERVICES

This Retainer Agreement ("Agreement") is entered into as of ${formatDate(formData.retainerDate) || '_______________'}, between:

CLIENT: ${formData.retainerClientName || '[Client Name]'} ("Client")
Address: ${formData.retainerClientAddress || '[Client Address]'}
Phone: ${formData.retainerClientPhone || '[Phone]'}
Email: ${formData.retainerClientEmail || '[Email]'}

ATTORNEY: Law Offices of Rozsa Gyene
By: Rozsa Gyene, Esq. (State Bar No. 208356)
450 N Brand Blvd, Suite 600
Glendale, CA 91203
(818) 291-6217
rozsagyenelaw@yahoo.com

1. SCOPE OF REPRESENTATION
Attorney agrees to provide legal services to Client in connection with:
${formData.retainerScope || '[Description of Legal Services]'}

This representation ${formData.retainerIncludes || 'includes'}: consultation, document review, legal research, drafting, negotiation, and court appearances as necessary.

This representation does NOT include: ${formData.retainerExcludes || 'appeals, bankruptcy proceedings, or matters outside the scope described above'}.

2. ATTORNEY'S FEES
A. Hourly Rates:
   • Rozsa Gyene, Esq.: $400.00 per hour
   • Paralegals: $150.00 per hour
   • Law Clerks: $125.00 per hour

B. Billing Increments: Time is billed in increments of one-tenth (0.1) of an hour (6 minutes).

C. Billable Activities include but are not limited to:
   • Client conferences (in person, telephone, email)
   • Legal research and analysis
   • Document drafting and review
   • Court appearances
   • Travel time
   • Correspondence

3. RETAINER DEPOSIT
Client agrees to pay an initial retainer deposit of $${formData.retainerAmount || '5,000.00'} upon execution of this Agreement. This deposit will be placed in Attorney's client trust account and applied to fees and costs as they are incurred.

4. BILLING AND PAYMENT
A. Monthly Statements: Attorney will provide Client with monthly statements showing:
   • Services performed
   • Time spent
   • Fees incurred
   • Costs advanced
   • Trust account balance

B. Payment Terms: If the retainer is depleted, Client agrees to replenish the retainer within 15 days of notice. Any balance due on monthly statements is payable within 30 days.

C. Interest on Unpaid Balances: Unpaid balances over 30 days shall accrue interest at 10% per annum.

5. COSTS AND EXPENSES
Client shall reimburse Attorney for all costs and expenses incurred, including:
• Court filing fees
• Service of process
• Court reporter fees
• Expert witness fees
• Photocopying ($.25 per page)
• Travel expenses
• Postage and delivery charges

6. CLIENT'S RESPONSIBILITIES
Client agrees to:
• Be truthful and cooperative
• Provide all relevant information and documents
• Respond promptly to Attorney's communications
• Appear at all required proceedings
• Pay fees and costs as agreed
• Keep Attorney informed of address/contact changes

7. DISCHARGE AND WITHDRAWAL
A. Client may discharge Attorney at any time.
B. Attorney may withdraw for good cause, including:
   • Nonpayment of fees or costs
   • Client's failure to cooperate
   • Client's insistence on illegal or unethical conduct
   • Irreconcilable differences regarding case handling

8. ATTORNEY'S LIEN
Client grants Attorney a lien on any recovery, settlement, judgment, or other proceeds obtained in this matter to secure payment of fees and costs.

9. DISPUTE RESOLUTION
Any dispute regarding fees shall first be submitted to the State Bar's Mandatory Fee Arbitration program. Other disputes shall be resolved through binding arbitration.

10. FILE RETENTION
Attorney will maintain Client's file for five years after the representation ends, after which it may be destroyed without notice to Client.

11. NO GUARANTEE
Attorney makes no guarantee regarding the outcome of Client's matter. Any expressions about possible outcomes are opinions only.

12. INFORMED CONSENT
Client acknowledges:
• Receipt of this Agreement
• Opportunity to ask questions
• Understanding of all terms
• That the fee arrangement is negotiable and not set by law
• The right to seek independent counsel before signing

13. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.

CLIENT ACKNOWLEDGMENT AND SIGNATURE

I have read, understood, and agree to all terms of this Agreement. I have received a copy for my records.

CLIENT: _______________________
${formData.retainerClientName || '[Client Name]'}
Date: ${formatDate(formData.retainerClientSignDate) || '_______________'}

ATTORNEY: _______________________
Rozsa Gyene, Esq.
State Bar No. 208356
Date: ${formatDate(formData.retainerAttorneySignDate) || '_______________'}

LAW OFFICES OF ROZSA GYENE
450 N Brand Blvd, Suite 600
Glendale, CA 91203`;
  };

  const renderForm = () => {
    switch(selectedDoc) {
      case 'llc':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">LLC Operating Agreement Information</h3>
            <input name="llcName" placeholder="LLC Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="businessAddress" placeholder="Business Address" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="registeredAgent" placeholder="Registered Agent Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="agentAddress" placeholder="Agent Address" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <textarea name="businessPurpose" placeholder="Business Purpose" onChange={handleInputChange} className="w-full p-2 border rounded h-20" />
            <div className="grid grid-cols-2 gap-4">
              <input name="member1Name" placeholder="Member 1 Name" onChange={handleInputChange} className="p-2 border rounded" />
              <input name="member1Percentage" placeholder="Member 1 %" type="number" onChange={handleInputChange} className="p-2 border rounded" />
              <input name="member1Contribution" placeholder="Member 1 Contribution $" type="number" onChange={handleInputChange} className="p-2 border rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input name="member2Name" placeholder="Member 2 Name" onChange={handleInputChange} className="p-2 border rounded" />
              <input name="member2Percentage" placeholder="Member 2 %" type="number" onChange={handleInputChange} className="p-2 border rounded" />
              <input name="member2Contribution" placeholder="Member 2 Contribution $" type="number" onChange={handleInputChange} className="p-2 border rounded" />
            </div>
            <input name="executionDate" type="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
        );
      case 'prenup':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Prenuptial Agreement Information</h3>
            <input name="party1Name" placeholder="Party 1 Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="party1Address" placeholder="Party 1 City, California" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="party2Name" placeholder="Party 2 Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="party2Address" placeholder="Party 2 City, California" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="previousMarriages" placeholder="Previous marriage status" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <label className="block">Agreement Date:</label>
            <input name="prenupDate" type="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <label className="block">Legal Review Date:</label>
            <input name="reviewDate" type="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
        );
      case 'contingency':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Contingency Fee Agreement Information</h3>
            <input name="clientName" placeholder="Client Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="caseType" placeholder="Type of Case (e.g., Trust Litigation)" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="caseDescription" placeholder="Case Description" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="caseNumber" placeholder="Case Number" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <textarea name="caseDetails" placeholder="Case Details" onChange={handleInputChange} className="w-full p-2 border rounded h-20" />
            <input name="preTrialPercentage" placeholder="Pre-Trial % (default 33)" type="number" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="trialPercentage" placeholder="Trial % (default 40)" type="number" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="propertyAddress" placeholder="Property Address (if applicable)" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <label className="block">Agreement Date:</label>
            <input name="contingencyDate" type="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
        );
      case 'corporation':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Corporation Formation Information</h3>
            <input name="corpName" placeholder="Corporation Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <textarea name="corpPurpose" placeholder="Corporate Purpose" onChange={handleInputChange} className="w-full p-2 border rounded h-20" />
            <input name="corpAgent" placeholder="Registered Agent Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="corpAgentAddress" placeholder="Agent Address" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <select name="hasMembers" onChange={handleInputChange} className="w-full p-2 border rounded">
              <option value="shall not">No Members</option>
              <option value="shall">Has Members</option>
            </select>
            <input name="director1" placeholder="Director 1 Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="director2" placeholder="Director 2 Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="director3" placeholder="Director 3 Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="incorporatorName" placeholder="Incorporator Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="incorporatorAddress" placeholder="Incorporator Address" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <label className="block">Incorporation Date:</label>
            <input name="incorporationDate" type="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
        );
      case 'retainer':
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">California Retainer Agreement Information</h3>
            <input name="retainerClientName" placeholder="Client Name" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="retainerClientAddress" placeholder="Client Address" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="retainerClientPhone" placeholder="Client Phone" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input name="retainerClientEmail" placeholder="Client Email" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <textarea name="retainerScope" placeholder="Scope of Legal Services" onChange={handleInputChange} className="w-full p-2 border rounded h-20" />
            <input name="retainerAmount" placeholder="Initial Retainer Amount" type="number" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <textarea name="retainerIncludes" placeholder="Services Included" onChange={handleInputChange} className="w-full p-2 border rounded h-20" />
            <textarea name="retainerExcludes" placeholder="Services Excluded" onChange={handleInputChange} className="w-full p-2 border rounded h-20" />
            <label className="block">Agreement Date:</label>
            <input name="retainerDate" type="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
        );
      default:
        return <div className="text-gray-500 text-center py-8">Please select a document type to begin</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Law Offices of Rozsa Gyene</h1>
          <p className="text-blue-100">450 N Brand Blvd, Suite 600, Glendale, CA 91203 • (818) 291-6217</p>
          <p className="text-blue-100">Document Generation System</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Document Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Select Document Type</h2>
              <div className="space-y-2">
                {documentTypes.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all flex items-center space-x-3 ${
                        selectedDoc === doc.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{doc.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate Button */}
            {selectedDoc && (
              <button
                onClick={generateDocument}
                className="mt-4 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <FileText size={20} />
                <span>Generate Document</span>
              </button>
            )}
          </div>

          {/* Form Input */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Document Information</h2>
              {renderForm()}
            </div>

            {/* Generated Document Preview */}
            {generatedDoc && (
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Generated Document</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={printDocument}
                      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors flex items-center space-x-2"
                    >
                      <Printer size={16} />
                      <span>Print/PDF</span>
                    </button>
                    <button
                      onClick={downloadPDF}
                      className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors flex items-center space-x-2"
                    >
                      <FileDown size={16} />
                      <span>HTML</span>
                    </button>
                    <button
                      onClick={downloadDocument}
                      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Download size={16} />
                      <span>Text</span>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">{generatedDoc}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentGenerator;