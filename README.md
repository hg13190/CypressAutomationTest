# CypressAutomationTest

### Please perform following steps before running the tests
For Windows OS machine:
1. Click on start menu
2. Right click on Notepad and click on Run as Administrator
3. Click on File from menu options
4. Click Open
5. Go to C:\Windows\System32\drivers\etc directory (Change drive if windows is installed in some other drive accordingly)
6. Click on Text Files (*.txt) drop down list and select All Files
7. Open hosts file
8. Enter the following lines and save:<br/>
192.168.29.130 www.fashionhub.in

For Macintosh OS machine:
1. Open the Terminal application. You may either type Terminal in the Spotlight search or by navigating to Applications , then the Utilities folder, then click on the Terminal app.
2. Open the hosts file for editing. In the terminal window you just opened copy/paste the command string below, and press return. sudo nano /private/etc/hosts or sudo nano /etc/hosts on newer MacOS.
3. Enter your password when it prompts you to enter your Mac user’s password. NOTE: you will not see the cursor move. This is normal, simply enter your password and press the Return when done.
3. Edit the hosts file by adding these two lines to the bottom of the file:<br/>
192.168.29.130 fashionhub.in<br/>
192.168.29.130 www.fashionhub.in
4. Save your changes by pressing control-o on your keyboard then return to accept the filename. Exit the editor by pressing control-x. This takes you back to the terminal screen.
5. You may need to flush your Mac’s DNS cache, so copy/paste the below command string into terminal, and press return: dscacheutil -flushcache. You may have to add sudo to this command, for example: sudo dscacheutil -flushcacheb.
