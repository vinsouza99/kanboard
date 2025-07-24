describe("Kanban Board", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays all three columns", () => {
    cy.contains("To Do");
    cy.contains("In Progress");
    cy.contains("Done");
  });

  it("can add new Task to ToDo", () => {
    cy.contains("To Do").parent().within(() => {
      cy.contains("+ Add Task").click();
    });

    cy.contains("Add New Task").should("be.visible");
    cy.get("input[placeholder='Task title']").type("Test Task");
    cy.get("#addTaskModal").get("button[type=submit]").click();
    cy.contains("Test Task").should("exist");
  });

  it("can edit task title and description", () => {
      cy.contains('h4', 'Move to In Progress')
      .parentsUntil('[class*="TaskCard"]')
      .parent()
      .first()
      .within(() => {
        cy.get('.task-menu-btn').click();
        cy.contains("Edit").click();
        cy.get("textarea").clear().type("Changed the description");
        cy.get("#editTaskModal").get("button[type=submit]").click();
        cy.contains("Move to In Progress").should("exist");
        cy.contains("Changed the description").should("exist");
      });
  });
  it("can drag and drop task cards", () => {
      cy.contains('h4', 'Move to In Progress').trigger('mousedown', {
        which: 1,
        pageX: 600,
        pageY: 100,
      });
      cy.contains('h4', 'Move to In Progress').trigger('mousemove', {
        which: 1,
        pageX: 600,
        pageY: 600,
      })
      cy.contains('h4', 'Move to In Progress').trigger('mouseup');
  });
});
