TestTask

Navigation Tree

I was create a "Navigation Tree" based on JSON file using React. The tree is populated usig the "name" field of the JSON Object. After clicking any item of tree this item expand and display the underlying children nodes which I took from the nodes of the JSON.

Each child node colored based on the field state of the object. In our case this colour green or red.

In this project I added four "select" item. Depends of its description this Selects dynamically fills with data which tooks from the JSON. Before rendering I filtered this data and deleted all dublicate items. These "selects" have own filter functionality. Once the select changed his state the "Tree" refreshes depending on the filter select.

http://drg.zzz.com.ua/
