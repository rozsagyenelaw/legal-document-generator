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
LIMITED LIABILITY COMPANY OPERATING AGREEMENT

THIS OPERATING AGREEMENT (this "Agreement") is made effective as of ${formData.effectiveDate || '[DATE]'}, by and among the Members listed herein of ${formData.llcName || '[LLC NAME]'}, a California limited liability company (the "Company").

ARTICLE I - FORMATION

1.1 Formation. The Company was formed by filing Articles of Organization with the California Secretary of State on ${formData.formationDate || '[DATE]'}.

1.2 Business Purpose. The purpose of the Company is ${formData.businessPurpose || '[BUSINESS PURPOSE]'}.

1.3 Principal Place of Business. The Company's principal place of business is located at ${formData.businessAddress || '[ADDRESS]'}.

1.4 Registered Agent. The Company's registered agent is ${formData.registeredAgent || '[AGENT NAME]'}, located at ${formData.agentAddress || '[AGENT ADDRESS]'}.

ARTICLE II - MEMBERS AND MEMBERSHIP INTERESTS

2.1 Members. The initial Members of the Company and their respective Membership Interests are as follows:

Member 1: ${formData.member1Name || '[MEMBER 1 NAME]'}
Percentage Interest: ${formData.member1Percentage || '[%]'}%
Capital Contribution: ${formData.member1Contribution || '[AMOUNT]'}

Member 2: ${formData.member2Name || '[MEMBER 2 NAME]'}
Percentage Interest: ${formData.member2Percentage || '[%]'}%
Capital Contribution: ${formData.member2Contribution || '[AMOUNT]'}

This Operating Agreement is governed by the laws of the State of California.

IN WITNESS WHEREOF, the Members have executed this Operating Agreement as of the date first written above.

_________________________               _________________________
${formData.member1Name || '[MEMBER 1 NAME]'}      ${formData.member2Name || '[MEMBER 2 NAME]'}
Date: _____________                     Date: _____________
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
