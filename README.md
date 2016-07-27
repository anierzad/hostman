# Hostsman
A simple node tool to provide easy management of host overrides.

## Introduction
In my current role I work on a MacBook Pro and frequently need to locally host websites in a virtual machine running Windows. In order to minimise the number of applications running in the virtual machine I use an OS X web browser to access the websites hosted by the virtual machine.

This means I end up adding host overrides to the hosts file very frequently. Even more so If I work from a location other than the office and my virtual machine is assigned a dynamic IP.

## Aims
The aim of this project is to produce a tool which provides a quick and easy command line interface to manipulate the hosts file on OS X.

You should be able to specify an IP for a development machine and add domains which should point to that IP. If I update the IP for the development machine, all the domains should update too.

I'm sure additional features will appear as the project progresses.
