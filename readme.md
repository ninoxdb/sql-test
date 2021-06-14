# SQL Test

This simple script connects to a MSSQL Server database after being configured correctly. This helps to quickly test a given configuration.

## Prerequisite

* node 10.15.3
* MSSQL Server

## Install

### Step 1

Download the appropriate version of Node.js for your operating system from [here](https://nodejs.org/dist/v10.15.3/)

### Step 2

Open the download and follow instructions.

### Step 3

Open a command line terminal

### Step 4

Change the working directory to where the sql-test files are.

### Step 5

Run this command:

```
npm install
```

This will install dependencies like the Node.js library to connect to the MSSQL Server.

## Usage

### Step 1

Open the file `test-sql-config.js` and change the settings according to your MSSQL Server installation.

### Step 2

Open a command line terminal.

### Step 3

Change the working directory to where the sql-test files are.

### Step 4

Run this command:

```
node test-sql-config
```

### Step 5

In case the connection can be established successfully, the script will terminate after showing the results of the SQL command.

In case of an error, you will receive the error message. Please use this feedback to work on the configuration and/or the network setup until the connection can be established successfully.
