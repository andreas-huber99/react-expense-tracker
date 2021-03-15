/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String!) {
    onCreateTransaction(owner: $owner) {
      id
      from {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      to {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        createdAt
        updatedAt
        owner
      }
      amount
      timestamp
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String!) {
    onUpdateTransaction(owner: $owner) {
      id
      from {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      to {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        createdAt
        updatedAt
        owner
      }
      amount
      timestamp
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String!) {
    onDeleteTransaction(owner: $owner) {
      id
      from {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      to {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        createdAt
        updatedAt
        owner
      }
      amount
      timestamp
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBankAccount = /* GraphQL */ `
  subscription OnCreateBankAccount($owner: String!) {
    onCreateBankAccount(owner: $owner) {
      id
      name
      description
      outgoingTransactions {
        nextToken
      }
      incomingTransactions {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBankAccount = /* GraphQL */ `
  subscription OnUpdateBankAccount($owner: String!) {
    onUpdateBankAccount(owner: $owner) {
      id
      name
      description
      outgoingTransactions {
        nextToken
      }
      incomingTransactions {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBankAccount = /* GraphQL */ `
  subscription OnDeleteBankAccount($owner: String!) {
    onDeleteBankAccount(owner: $owner) {
      id
      name
      description
      outgoingTransactions {
        nextToken
      }
      incomingTransactions {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String!) {
    onCreateCategory(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String!) {
    onUpdateCategory(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String!) {
    onDeleteCategory(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
