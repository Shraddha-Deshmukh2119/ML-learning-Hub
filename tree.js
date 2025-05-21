// JavaScript for the interactive ML concept tree

document.addEventListener('DOMContentLoaded', function() {
    // Get all nodes in the tree
    const treeNodes = document.querySelectorAll('.tree-node .node-content');
    
    // Handle click events for each node
    treeNodes.forEach(node => {
        // Create separate event handlers for expanding and navigation
        
        // For algorithm nodes (leaf nodes)
        if (node.closest('.tree-node').classList.contains('algorithm')) {
            node.addEventListener('click', function() {
                const link = this.closest('.tree-node').getAttribute('data-link') || 
                             this.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            });
        } 
        // For category nodes with subbranches (internal nodes)
        else {
            // Add click handlers to the expand icon specifically
            const expandIcon = node.querySelector('.expand-icon');
            if (expandIcon) {
                expandIcon.addEventListener('click', function(e) {
                    e.stopPropagation(); // Don't navigate when clicking expand icon
                    
                    const nodeContent = this.closest('.node-content');
                    const subBranches = nodeContent.nextElementSibling;
                    
                    if (subBranches && subBranches.classList.contains('sub-branches')) {
                        // Toggle visibility
                        subBranches.classList.toggle('hidden');
                        
                        // Toggle icon
                        const icon = this.querySelector('i');
                        if (icon) {
                            if (subBranches.classList.contains('hidden')) {
                                icon.classList.remove('fa-chevron-up');
                                icon.classList.add('fa-chevron-down');
                            } else {
                                icon.classList.remove('fa-chevron-down');
                                icon.classList.add('fa-chevron-up');
                            }
                        }
                    }
                });
            }
            
            // Add navigation handler for the content area
            node.addEventListener('click', function(e) {
                // Don't trigger if clicking on the expand icon
                if (e.target.closest('.expand-icon')) {
                    return;
                }
                
                const link = this.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            });
        }
    });

    // Add hover effects to tree nodes
    const addHoverEffects = () => {
        const allNodes = document.querySelectorAll('.tree-node .node-content');
        
        allNodes.forEach(node => {
            node.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            });
            
            node.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    };

    addHoverEffects();

    // Function to draw connecting lines between nodes using SVG
    const drawTreeConnections = () => {
        // This is a placeholder for more advanced tree visualization
        // In a production environment, this would use SVG or Canvas to draw lines
        // between parent and child nodes for a more visual tree representation
        
        // For now, we're using CSS pseudo-elements for the connections
    };

    drawTreeConnections();

    // Add animation when expanding tree nodes
    const animateTreeExpansion = () => {
        const subBranches = document.querySelectorAll('.sub-branches');
        
        subBranches.forEach(branch => {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        const isHidden = branch.classList.contains('hidden');
                        
                        if (!isHidden) {
                            // Animate each algorithm node when branch is expanded
                            const algorithms = branch.querySelectorAll('.algorithm');
                            algorithms.forEach((algo, index) => {
                                algo.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
                                algo.style.opacity = '0';
                            });
                        }
                    }
                });
            });
            
            observer.observe(branch, { attributes: true });
        });
    };

    animateTreeExpansion();
});