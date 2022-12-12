#!/usr/bin/env node
'use strict'

// Pull in our modules

import chalk from 'chalk'

import boxen from 'boxen'

import * as fs from 'fs';

import path from 'path'


// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

// Text + chalk definitions
const data = {
    name: chalk.white('           Advait Jain'),
    handle: chalk.white('           Zoronium'),
    shorthandle: chalk.white('              Zoro'),
    work: chalk.white('Student'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('codewithzoro'),
    npm: chalk.gray(''),
    github: chalk.gray('https://github.com/') + chalk.green('Zoronium'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('advaitj'),
    web: chalk.cyan('https://zoronium.github.io'),
    npx: chalk.red(' TODO'),
    labelWork: chalk.white.bold('    Work:'),
    labelTwitter: chalk.white.bold(' Twitter:'),
    labelnpm: chalk.white.bold('     npm:'),
    labelGitHub: chalk.white.bold('  GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelWeb: chalk.white.bold('     Web:'),
    labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / \n  ${data.handle} / \n  ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
//const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`


// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
    newline + newline + // Add one whole blank line
    working + newline + // data.labelWork + data.work
    twittering + newline + // data.labelTwitter + data.twitter
    //npming + newline + // data.labelnpm + data.npm
    githubing + newline + // data.labelGitHub + data.github
    linkedining + newline + // data.labelLinkedIn + data.linkedin
    webing + newline + newline + // data.labelWeb + data.web
    carding + newline + // data.labelCard + data.npx
    newline+
    `${chalk.bold(
            "   >>> Hi there! I'm Advait,\n "
        )}` + newline +
    `${chalk.whiteBright("I'm a A Growing Dev | Student  ")}` + newline+
    `${chalk.whiteBright("developer and web designer from India, and  ")}` +
    `${chalk.whiteBright(
        "love to code and meme "
    )}` + newline +
    `${chalk.whiteBright(
        "web apps. Toss me an DM if you want to collab! "
    )}` +
    `${chalk.whiteBright(
        "or just want to talk "
    )}`


console.log(chalk.green(boxen(output, options)))