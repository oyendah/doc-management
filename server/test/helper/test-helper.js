import faker from 'faker';

const newData = {
  newRole: {
    title: 'users'
  },

  regRole: {
    title: 'normal'
  },

  adminUser: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 1
  },

  administrator: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 1
  },

  regUser: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },

  regular: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },

  docUser: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },

  newUser: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  privateDoc: {
    title: faker.company.catchPhrase(),
    docContent: faker.lorem.paragraph(),
    viewAccess: 'private',
  },

  publicDoc: {
    title: faker.company.catchPhrase(),
    docContent: faker.lorem.paragraph(),
    viewAccess: 'public',
  },

  sharedDoc: {
    title: faker.company.catchPhrase(),
    docContent: faker.lorem.paragraph(),
    viewAccess: 'public',
  },

  roleDoc: {
    title: faker.company.catchPhrase(),
    docContent: faker.lorem.paragraph(),
    viewAccess: 'role',
  },

  shared: {
    email: faker.internet.email(),
    canEdit: true,
    documentId: 1
  }
};

export default newData;