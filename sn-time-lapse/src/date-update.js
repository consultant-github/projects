//Time Lapse

//[incident sys id]   INC0000002
//returns updated ‘opened at’ incident date and time

var gr = new GlideRecord(‘incident’);
gr.get(‘[incident sys id here]’);
var openedAtDate = gr.opened_at;
gs.info("Original opened date: " + openedAtDate)
var gdt = new GlideDateTime(openedAtDate);
gdt.addWeeks(1);
gs.info("Updated opened date: " + gdt);
