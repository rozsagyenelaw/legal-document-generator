import React, { useState } from 'react';
import { Building, Users, Heart, FileText, DollarSign } from 'lucide-react';

function App() {
  const [selectedDocument, setSelectedDocument] = useState('llc');
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [formData, setFormData] = useState({});

  const firmInfo = {
    name: "Law Offices of Rozsa Gyene",
    address: "450 N Brand Blvd, Suite 600",
    city: "Glendale, CA 91203",
    phone: "(818) 291-6217",
    email: "rozsagyenelaw@yahoo.com",
    hourlyRate: "$400/hour"
  };

  const documentTypes = [
    { id: 'llc', name: 'LLC Operating Agreement', icon: Users },
    { id: 'prenup', name: 'Prenuptial Agreement', icon: Heart },
    { id: 'contingency', name: 'Contingency Fee Agreement', icon: DollarSign },
    { id: 'corp', name: 'Corporation Formation', icon: Building },
    { id: 'retainer', name: 'CA Retainer Agreement', icon: FileText }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateDocument = () => {
    let template = '';
    
    switch (selectedDocument) {
      case 'llc':
        template = generateLLCDocument();
        break;
      case 'prenup':
        template = generatePrenupDocument();
        break;
      case 'contingency':
        template = generateContingencyDocument();
        break;
      case 'corp':
        template = generateCorpDocument();
        break;
      case 'retainer':
        template = generateRetainerDocument();
        break;
      default:
        template = 'Document type not found.';
    }
    
    setGeneratedDocument(template);
  };

  const generateLLCDocument = () => {
    return `
                        OPERATING AGREEMENT
                              OF
                    ${formData.llcName || '[COMPANY NAME]'} LLC
                    A CALIFORNIA LIMITED LIABILITY COMPANY

THIS OPERATING AGREEMENT (this "Agreement") of ${formData.llcName || '[COMPANY NAME]'} LLC, a California limited liability company (the "Company"), is made and entered into as of ${formData.effectiveDate || '[DATE]'}, by and among the persons whose names and signatures appear on the signature pages hereof, each of whom is referred to herein as a "Member" and all of whom are referred to herein collectively as the "Members."

                                RECITALS

WHEREAS, the Members desire to form a limited liability company pursuant to the California Revised Uniform Limited Liability Company Act (Corporations Code Section 17701.01 et seq.) (the "Act");

WHEREAS, the Members desire to continue the Company as a limited liability company under the Act and to set forth the terms and conditions of their agreement as to the affairs of the Company and the conduct of its business;

NOW, THEREFORE, in consideration of the agreements and obligations set forth herein and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:

                            ARTICLE I
                           FORMATION

1.1 Formation. The Company was formed by filing Articles of Organization with the California Secretary of State on ${formData.formationDate || '[FORMATION DATE]'}. The rights and liabilities of the Members shall be as provided in the Act, except as otherwise provided herein.

1.2 Name. The name of the Company is "${formData.llcName || '[COMPANY NAME]'} LLC."

1.3 Principal Office. The principal office of the Company shall be located at ${formData.businessAddress || '[BUSINESS ADDRESS]'}, or at such other location as may be determined by the Members.

1.4 Registered Office and Agent. The registered office of the Company required by the Act to be maintained in California shall be ${formData.agentAddress || '[AGENT ADDRESS]'}. The registered agent of the Company at such address shall be ${formData.registeredAgent || '[REGISTERED AGENT NAME]'}. The registered office and registered agent may be changed from time to time by the Members.

1.5 Term. The Company shall commence upon the filing of the Articles of Organization and shall continue until dissolved in accordance with the provisions of this Agreement or as otherwise provided by law.

1.6 Purpose. The purpose of the Company is to engage in ${formData.businessPurpose || 'any lawful business purpose'}, and to engage in any other activities necessary or incidental thereto.

                           ARTICLE II
                        CAPITAL CONTRIBUTIONS

2.1 Initial Contributions. The Members have contributed or agreed to contribute to the Company the amounts set forth below their respective names:

${formData.member1Name || '[MEMBER 1 NAME]'}: $${formData.member1Contribution || '[AMOUNT]'}
${formData.member2Name || '[MEMBER 2 NAME]'}: $${formData.member2Contribution || '[AMOUNT]'}

2.2 Additional Contributions. Except as otherwise provided herein, no Member shall be obligated to make any additional contributions to the Company.

2.3 Return of Contributions. Except as otherwise provided in this Agreement or required by law, no Member shall have the right to demand the return of such Member's capital contribution or to receive any distribution from the Company.

2.4 Interest on Contributions. No Member shall be entitled to interest on any capital contribution.

                          ARTICLE III
                       MEMBERSHIP INTERESTS

3.1 Membership Interests. The membership interests of the Members shall be as follows:

${formData.member1Name || '[MEMBER 1 NAME]'}: ${formData.member1Percentage || '50'}%
${formData.member2Name || '[MEMBER 2 NAME]'}: ${formData.member2Percentage || '50'}%

3.2 Certificates. No certificates shall be issued to evidence membership interests.

3.3 Transfer of Membership Interests. No Member may transfer, assign, or otherwise dispose of all or any portion of such Member's membership interest without the prior written consent of all other Members.

                          ARTICLE IV
                            MANAGEMENT

4.1 Management by Members. The Company shall be managed by its Members. Each Member shall have the authority to bind the Company.

4.2 Voting. Except as otherwise provided herein or by law, all decisions shall require the unanimous consent of all Members.

4.3 Fiduciary Duties. Each Member owes to the Company and the other Members the fiduciary duties of loyalty and care in the discharge of such Member's duties.

4.4 Limitation of Liability. No Member shall be liable, responsible, or accountable in damages or otherwise to the Company or any other Member for any loss, damage, or claim incurred by reason of any act or omission performed or omitted by such Member in good faith on behalf of the Company.

                           ARTICLE V
                    ALLOCATIONS AND DISTRIBUTIONS

5.1 Allocations of Net Income and Net Loss. Except as otherwise provided herein, Net Income and Net Loss (and, to the extent necessary, individual items of income, gain, loss, deduction, and credit) of the Company for each fiscal year shall be allocated among the Members in accordance with their respective Membership Interest percentages.

5.2 Distributions. Distributions shall be made to the Members at the times and in the aggregate amounts determined by the unanimous consent of the Members. All distributions shall be made to the Members in accordance with their respective Membership Interest percentages.

5.3 Limitation on Distributions. No distribution shall be made if, after the distribution: (a) the Company would not be able to pay its debts as they become due in the ordinary course of business; or (b) the Company's total assets would be less than the sum of its total liabilities.

                          ARTICLE VI
                            ACCOUNTING

6.1 Books and Records. The Company shall maintain complete and accurate books and records of account and shall maintain minutes of the proceedings of the Members.

6.2 Fiscal Year. The fiscal year of the Company shall be the calendar year.

6.3 Tax Elections. The Company shall make the election under Section 754 of the Internal Revenue Code if such an election is requested by any Member.

                          ARTICLE VII
                   DISSOLUTION AND LIQUIDATION

7.1 Dissolution. The Company shall be dissolved upon the first to occur of the following:
   (a) The unanimous written consent of all Members;
   (b) The entry of a decree of judicial dissolution under Section 17707.03 of the Act; or
   (c) At any time there are no remaining Members.

7.2 Liquidation. Upon dissolution of the Company, the Members shall proceed with reasonable promptness to liquidate the business and affairs of the Company.

7.3 Distribution of Assets. The proceeds of liquidation shall be distributed in the following order of priority:
   (a) To creditors (including Members who are creditors) in satisfaction of liabilities of the Company;
   (b) To Members in accordance with their positive capital account balances.

                         ARTICLE VIII
                          MISCELLANEOUS

8.1 Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of California.

8.2 Amendments. This Agreement may be amended only by the written consent of all Members.

8.3 Binding Effect. This Agreement shall be binding upon and inure to the benefit of the parties hereto and their respective successors and permitted assigns.

8.4 Severability. If any provision of this Agreement is held invalid or unenforceable, the remainder of this Agreement shall remain in full force and effect.

8.5 Counterparts. This Agreement may be executed in counterparts, each of which shall be deemed an original and all of which together shall constitute one and the same instrument.

8.6 Attorney Fees. In any action or proceeding to enforce any provision of this Agreement, the prevailing party shall be entitled to recover reasonable attorney fees and costs.

IN WITNESS WHEREOF, the parties have executed this Operating Agreement as of the date first written above.

MEMBERS:

_________________________________    Date: _______________
${formData.member1Name || '[MEMBER 1 NAME]'}

_________________________________    Date: _______________
${formData.member2Name || '[MEMBER 2 NAME]'}

STATE OF CALIFORNIA   )
                     ) ss.
COUNTY OF LOS ANGELES )

On ________________, before me, ________________________, Notary Public, personally appeared ${formData.member1Name || '[MEMBER 1 NAME]'} and ${formData.member2Name || '[MEMBER 2 NAME]'}, who proved to me on the basis of satisfactory evidence to be the persons whose names are subscribed to the within instrument and acknowledged to me that they executed the same in their authorized capacities, and that by their signatures on the instrument the persons, or the entity upon behalf of which the persons acted, executed the instrument.

I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

Signature _________________________

[Notary Seal]


This document was prepared by:
${firmInfo.name}
${firmInfo.address}
${firmInfo.city}
${firmInfo.phone}
Attorney for the Company
    `;
  };

  const generatePrenupDocument = () => {
    return `
PRENUPTIAL AGREEMENT

This Prenuptial Agreement ("Agreement") is entered into on ${formData.effectiveDate || '[DATE]'}, between ${formData.party1Name || '[PARTY 1 NAME]'} ("Party 1") and ${formData.party2Name || '[PARTY 2 NAME]'} ("Party 2"), who intend to marry each other.

RECITALS

The parties desire to enter into this Agreement to establish their respective rights and obligations regarding property, support, and other matters in the event of separation, divorce, or death.

1. SEPARATE PROPERTY
Each party's separate property shall remain their separate property, including but not limited to property owned before marriage and property acquired by gift or inheritance during marriage.

2. MARITAL PROPERTY
Property acquired during marriage through the joint efforts of both parties shall be considered marital property and divided equitably upon dissolution.

3. SPOUSAL SUPPORT
Each party waives any right to seek spousal support from the other, except as may be required by law.

This Agreement shall be governed by the laws of the State of California.

IN WITNESS WHEREOF, the parties have executed this Agreement on the date first written above.

_________________________               _________________________
${formData.party1Name || '[PARTY 1 NAME]'}           ${formData.party2Name || '[PARTY 2 NAME]'}
Date: _____________                     Date: _____________
    `;
  };

  const generateContingencyDocument = () => {
    return `
CONTINGENCY FEE AGREEMENT

This Contingency Fee Agreement ("Agreement") is entered into between ${firmInfo.name}, a California law firm ("Attorney"), and ${formData.clientName || '[CLIENT NAME]'} ("Client").

1. SCOPE OF REPRESENTATION
Attorney agrees to represent Client in the matter of: ${formData.caseDescription || '[CASE DESCRIPTION]'}

2. CONTINGENCY FEE
Attorney's fee shall be ${formData.contingencyPercentage || '33.33'}% of any recovery obtained through settlement, judgment, or other resolution of the matter.

3. COSTS AND EXPENSES
Client is responsible for all costs and expenses incurred in connection with this matter, including but not limited to court filing fees, deposition costs, expert witness fees, and investigation expenses.

4. NO RECOVERY, NO FEE
If no recovery is obtained, Client owes no attorney's fees to Attorney, but Client remains responsible for costs and expenses advanced by Attorney.

This Agreement is governed by the laws of the State of California and the Rules of Professional Conduct.

Client Name: ${formData.clientName || '[CLIENT NAME]'}
Client Signature: _________________________ Date: _____________

Attorney: ${firmInfo.name}
By: Rozsa Gyene, Esq.
Attorney Signature: _________________________ Date: _____________
    `;
  };

  const generateCorpDocument = () => {
    return `
ARTICLES OF INCORPORATION

ARTICLE I - NAME
The name of this corporation is ${formData.corpName || '[CORPORATION NAME]'}.

ARTICLE II - PURPOSE
The purpose of this corporation is to engage in any lawful act or activity for which a corporation may be organized under the General Corporation Law of California.

ARTICLE III - AGENT FOR SERVICE OF PROCESS
The name and address in California of this corporation's initial agent for service of process is:
${formData.registeredAgent || '[AGENT NAME]'}
${formData.agentAddress || '[AGENT ADDRESS]'}

ARTICLE IV - CAPITAL STOCK
This corporation is authorized to issue only one class of shares, designated as common stock. The total number of shares authorized is ${formData.authorizedShares || '1,000,000'} shares.

ARTICLE V - DIRECTORS
The number of directors of this corporation is ${formData.numberOfDirectors || '3'}.

IN WITNESS WHEREOF, the undersigned, being the incorporator of this corporation, has executed these Articles of Incorporation on ${formData.effectiveDate || '[DATE]'}.

_________________________
Incorporator Signature
${formData.incorporatorName || '[INCORPORATOR NAME]'}
    `;
  };

  const generateRetainerDocument = () => {
    return `
RETAINER AGREEMENT FOR LEGAL SERVICES

This Retainer Agreement ("Agreement") is entered into between ${firmInfo.name} ("Attorney") and ${formData.clientName || '[CLIENT NAME]'} ("Client").

1. SCOPE OF SERVICES
Attorney agrees to represent Client in the following matter: ${formData.matterDescription || '[MATTER DESCRIPTION]'}

2. RETAINER AND FEES
Client agrees to pay a retainer of $${formData.retainerAmount || '[AMOUNT]'} upon execution of this Agreement. Attorney's hourly rate is ${firmInfo.hourlyRate}. Time will be billed in increments of one-tenth (1/10) of an hour.

3. BILLING AND PAYMENT
Attorney will bill Client monthly for services rendered and costs incurred. Payment is due within thirty (30) days of the billing date.

4. TRUST ACCOUNT
The retainer will be deposited in Attorney's trust account and withdrawn as fees are earned and costs are incurred.

5. TERMINATION
Either party may terminate this Agreement upon written notice. Upon termination, any unused retainer will be refunded to Client.

This Agreement is governed by the laws of the State of California.

Client Name: ${formData.clientName || '[CLIENT NAME]'}
Client Signature: _________________________ Date: _____________

Attorney: ${firmInfo.name}
By: Rozsa Gyene, Esq.
State Bar No. [NUMBER]
Attorney Signature: _________________________ Date: _____________
    `;
  };

  const renderFormFields = () => {
    switch (selectedDocument) {
      case 'llc':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>LLC Name</label>
              <input
                type="text"
                value={formData.llcName || ''}
                onChange={(e) => handleInputChange('llcName', e.target.value)}
                placeholder="Enter LLC name"
              />
            </div>
            <div className="form-group">
              <label>Business Address</label>
              <input
                type="text"
                value={formData.businessAddress || ''}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                placeholder="Enter business address"
              />
            </div>
            <div className="form-group">
              <label>Registered Agent Name</label>
              <input
                type="text"
                value={formData.registeredAgent || ''}
                onChange={(e) => handleInputChange('registeredAgent', e.target.value)}
                placeholder="Enter registered agent name"
              />
            </div>
            <div className="form-group">
              <label>Agent Address</label>
              <input
                type="text"
                value={formData.agentAddress || ''}
                onChange={(e) => handleInputChange('agentAddress', e.target.value)}
                placeholder="Enter agent address"
              />
            </div>
            <div className="form-group">
              <label>Business Purpose</label>
              <textarea
                value={formData.businessPurpose || ''}
                onChange={(e) => handleInputChange('businessPurpose', e.target.value)}
                placeholder="Describe the business purpose"
              />
            </div>
            <div className="form-group">
              <label>Formation Date</label>
              <input
                type="date"
                value={formData.formationDate || ''}
                onChange={(e) => handleInputChange('formationDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Member 1 Name</label>
              <input
                type="text"
                value={formData.member1Name || ''}
                onChange={(e) => handleInputChange('member1Name', e.target.value)}
                placeholder="Enter member 1 name"
              />
            </div>
            <div className="form-group">
              <label>Member 1 Percentage</label>
              <input
                type="number"
                value={formData.member1Percentage || ''}
                onChange={(e) => handleInputChange('member1Percentage', e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <div className="form-group">
              <label>Member 1 Contribution</label>
              <input
                type="text"
                value={formData.member1Contribution || ''}
                onChange={(e) => handleInputChange('member1Contribution', e.target.value)}
                placeholder="Enter contribution amount"
              />
            </div>
            <div className="form-group">
              <label>Member 2 Name</label>
              <input
                type="text"
                value={formData.member2Name || ''}
                onChange={(e) => handleInputChange('member2Name', e.target.value)}
                placeholder="Enter member 2 name"
              />
            </div>
            <div className="form-group">
              <label>Member 2 Percentage</label>
              <input
                type="number"
                value={formData.member2Percentage || ''}
                onChange={(e) => handleInputChange('member2Percentage', e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <div className="form-group">
              <label>Member 2 Contribution</label>
              <input
                type="text"
                value={formData.member2Contribution || ''}
                onChange={(e) => handleInputChange('member2Contribution', e.target.value)}
                placeholder="Enter contribution amount"
              />
            </div>
            <div className="form-group">
              <label>Effective Date</label>
              <input
                type="date"
                value={formData.effectiveDate || ''}
                onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
              />
            </div>
          </div>
        );
      
      case 'contingency':
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Client Name</label>
              <input
                type="text"
                value={formData.clientName || ''}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter client name"
              />
            </div>
            <div className="form-group">
              <label>Case Description</label>
              <textarea
                value={formData.caseDescription || ''}
                onChange={(e) => handleInputChange('caseDescription', e.target.value)}
                placeholder="Describe the legal matter"
              />
            </div>
            <div className="form-group">
              <label>Contingency Percentage</label>
              <select
                value={formData.contingencyPercentage || '33.33'}
                onChange={(e) => handleInputChange('contingencyPercentage', e.target.value)}
              >
                <option value="25">25%</option>
                <option value="33.33">33.33%</option>
                <option value="40">40%</option>
              </select>
            </div>
          </div>
        );

      default:
        return (
          <div className="form-grid">
            <div className="form-group">
              <label>Client Name</label>
              <input
                type="text"
                value={formData.clientName || ''}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter client name"
              />
            </div>
            <div className="form-group">
              <label>Matter Description</label>
              <textarea
                value={formData.matterDescription || ''}
                onChange={(e) => handleInputChange('matterDescription', e.target.value)}
                placeholder="Describe the legal matter"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <h1>{firmInfo.name}</h1>
        <p>{firmInfo.address}, {firmInfo.city} • {firmInfo.phone}</p>
        <div className="subtitle">Document Generation System</div>
      </div>

      {/* Document Type Selection */}
      <div className="document-type-section">
        <h2>Select Document Type</h2>
        <div className="document-type-buttons">
          {documentTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedDocument(type.id)}
                className={`document-type-button ${selectedDocument === type.id ? 'active' : ''}`}
              >
                <IconComponent size={20} />
                {type.name}
              </button>
            );
          })}
        </div>

        <button
          onClick={generateDocument}
          className="document-type-button"
        >
          <FileText size={20} />
          Generate Document
        </button>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h3>
          {documentTypes.find(d => d.id === selectedDocument)?.name} Information
        </h3>
        {renderFormFields()}
        
        <button
          onClick={generateDocument}
          className="generate-button"
        >
          Generate Document
        </button>
      </div>

      {/* Generated Document */}
      {generatedDocument && (
        <div className="generated-document">
          <div className="document-actions">
            <button 
              className="action-button"
              onClick={() => window.print()}
            >
              Print Document
            </button>
            <button 
              className="action-button"
              onClick={() => {
                const element = document.createElement("a");
                const file = new Blob([generatedDocument], {type: 'text/plain'});
                element.href = URL.createObjectURL(file);
                element.download = `${selectedDocument}_document.txt`;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}
            >
              Download
            </button>
          </div>
          
          <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'serif'}}>
            {generatedDocument}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
