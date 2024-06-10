import zipfile

with zipfile.ZipFile('01-starting-project.zip','r') as f:
    f.extractall()